import PDFDocument from "pdfkit";
import status from "http-status";
import { prisma } from "../../../lib/prisma";
import { stripe } from "../../../lib/stripe";
import ApiError from "../../errors/ApiErrors";
import { CourseAccessDuration, CoursePurchaseStatus, } from "../../../../generated/prisma/enums";
import { coursePriceToStripeMinorUnits } from "./course.stripe-amount";
//======== Helpers (slug, access window, receipt number) =========
function slugifyTitle(title) {
    const base = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 80);
    return base || "course";
}
function computeAccessExpiresAt(paidAt, duration) {
    if (duration === CourseAccessDuration.UNLIMITED)
        return null;
    const d = new Date(paidAt);
    if (duration === CourseAccessDuration.MONTHS_6)
        d.setMonth(d.getMonth() + 6);
    if (duration === CourseAccessDuration.MONTHS_12)
        d.setMonth(d.getMonth() + 12);
    return d;
}
function makeReceiptNumber() {
    const y = new Date().getFullYear();
    const rand = Math.random().toString(36).slice(2, 10).toUpperCase();
    return `QH-${y}-${rand}`;
}
//======== Public catalog =========
//======== List published courses =========
const listPublishedCourses = async () => {
    return prisma.course.findMany({
        where: { isPublished: true },
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            priceAmount: true,
            currency: true,
            accessDuration: true,
            thumbnailUrl: true,
            createdAt: true,
        },
    });
};
//======== Get one published course =========
const getPublishedCourse = async (idOrSlug) => {
    const row = await prisma.course.findFirst({
        where: {
            isPublished: true,
            OR: [{ id: idOrSlug }, { slug: idOrSlug }],
        },
        select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            priceAmount: true,
            currency: true,
            accessDuration: true,
            thumbnailUrl: true,
            createdAt: true,
        },
    });
    if (!row) {
        throw new ApiError(status.NOT_FOUND, "Course not found");
    }
    return row;
};
//======== Admin CRUD =========
//======== List all courses (admin) =========
const listAllCoursesAdmin = async () => {
    return prisma.course.findMany({
        orderBy: { updatedAt: "desc" },
        include: {
            createdBy: { select: { id: true, email: true, name: true } },
            _count: { select: { purchases: true } },
        },
    });
};
//======== Create course =========
const createCourse = async (createdByUserId, payload) => {
    let slug = payload.slug ?? slugifyTitle(payload.title);
    for (let i = 0; i < 5; i++) {
        const exists = await prisma.course.findUnique({ where: { slug } });
        if (!exists)
            break;
        slug = `${slugifyTitle(payload.title)}-${Math.random().toString(36).slice(2, 6)}`;
    }
    return prisma.course.create({
        data: {
            title: payload.title,
            slug,
            description: payload.description ?? null,
            priceAmount: payload.priceAmount,
            currency: payload.currency,
            accessDuration: payload.accessDuration,
            thumbnailUrl: payload.thumbnailUrl ?? null,
            isPublished: payload.isPublished ?? false,
            createdByUserId,
        },
    });
};
//======== Update course =========
const updateCourse = async (courseId, payload) => {
    const existing = await prisma.course.findUnique({ where: { id: courseId } });
    if (!existing) {
        throw new ApiError(status.NOT_FOUND, "Course not found");
    }
    if (payload.slug && payload.slug !== existing.slug) {
        const clash = await prisma.course.findUnique({ where: { slug: payload.slug } });
        if (clash) {
            throw new ApiError(status.CONFLICT, "Slug already in use");
        }
    }
    const data = {};
    if (payload.title !== undefined)
        data.title = payload.title;
    if (payload.slug !== undefined)
        data.slug = payload.slug;
    if (payload.description !== undefined)
        data.description = payload.description;
    if (payload.priceAmount !== undefined)
        data.priceAmount = payload.priceAmount;
    if (payload.currency !== undefined)
        data.currency = payload.currency;
    if (payload.accessDuration !== undefined) {
        data.accessDuration = payload.accessDuration;
    }
    if (payload.thumbnailUrl !== undefined)
        data.thumbnailUrl = payload.thumbnailUrl;
    if (payload.isPublished !== undefined)
        data.isPublished = payload.isPublished;
    return prisma.course.update({
        where: { id: courseId },
        data,
    });
};
//======== Delete course (or unpublish if paid purchases exist) =========
const deleteCourse = async (courseId) => {
    const existing = await prisma.course.findUnique({
        where: { id: courseId },
        include: {
            _count: { select: { purchases: { where: { status: CoursePurchaseStatus.PAID } } } },
        },
    });
    if (!existing) {
        throw new ApiError(status.NOT_FOUND, "Course not found");
    }
    if (existing._count.purchases > 0) {
        return prisma.course.update({
            where: { id: courseId },
            data: { isPublished: false },
        });
    }
    await prisma.coursePurchase.deleteMany({ where: { courseId } });
    await prisma.course.delete({ where: { id: courseId } });
    return null;
};
//======== Applicant — resolve profile =========
const getApplicantByUserId = async (userId) => {
    const applicant = await prisma.applicant.findUnique({ where: { userId } });
    if (!applicant) {
        throw new ApiError(status.NOT_FOUND, "Applicant profile not found");
    }
    return applicant;
};
//======== Create Stripe Checkout session =========
const createCheckoutSession = async (userId, courseId) => {
    if (!stripe) {
        throw new ApiError(status.SERVICE_UNAVAILABLE, "Payments are not configured (missing STRIPE_SECRET_KEY)");
    }
    const applicant = await getApplicantByUserId(userId);
    const course = await prisma.course.findFirst({
        where: { id: courseId, isPublished: true },
    });
    if (!course) {
        throw new ApiError(status.NOT_FOUND, "Course not available");
    }
    const alreadyPaid = await prisma.coursePurchase.findFirst({
        where: {
            applicantId: applicant.id,
            courseId: course.id,
            status: CoursePurchaseStatus.PAID,
        },
    });
    if (alreadyPaid) {
        throw new ApiError(status.CONFLICT, "You already own this course");
    }
    await prisma.coursePurchase.updateMany({
        where: {
            applicantId: applicant.id,
            courseId: course.id,
            status: CoursePurchaseStatus.PENDING,
        },
        data: { status: CoursePurchaseStatus.CANCELED },
    });
    // DB stores whole major units (e.g. 1000 BDT); Stripe needs minor units (e.g. 100000 poisha).
    const stripeMinorAmount = coursePriceToStripeMinorUnits(course.priceAmount, course.currency);
    const purchase = await prisma.coursePurchase.create({
        data: {
            applicantId: applicant.id,
            courseId: course.id,
            status: CoursePurchaseStatus.PENDING,
            amount: stripeMinorAmount,
            currency: course.currency,
        },
    });
    const appUrl = process.env.APP_URL || "http://localhost:3000";
    const successUrl = `${appUrl}/applicant/courses?checkout=success&session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${appUrl}/applicant/courses?checkout=cancel`;
    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: course.currency,
                    unit_amount: stripeMinorAmount,
                    product_data: {
                        name: course.title,
                        ...(course.description
                            ? { description: course.description.slice(0, 500) }
                            : {}),
                    },
                },
            },
        ],
        success_url: successUrl,
        cancel_url: cancelUrl,
        client_reference_id: purchase.id,
        metadata: {
            purchaseId: purchase.id,
            courseId: course.id,
            applicantId: applicant.id,
        },
    });
    await prisma.coursePurchase.update({
        where: { id: purchase.id },
        data: { stripeCheckoutSessionId: session.id },
    });
    if (!session.url) {
        throw new ApiError(status.INTERNAL_SERVER_ERROR, "Stripe did not return checkout URL");
    }
    return { checkoutUrl: session.url, purchaseId: purchase.id };
};
//======== List my course purchases =========
const listMyPurchases = async (userId) => {
    const applicant = await getApplicantByUserId(userId);
    return prisma.coursePurchase.findMany({
        where: { applicantId: applicant.id },
        orderBy: { createdAt: "desc" },
        include: {
            course: {
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    accessDuration: true,
                    thumbnailUrl: true,
                },
            },
        },
    });
};
//======== Get my paid purchase (for PDF) =========
const getMyPaidPurchase = async (userId, purchaseId) => {
    const applicant = await getApplicantByUserId(userId);
    const row = await prisma.coursePurchase.findFirst({
        where: {
            id: purchaseId,
            applicantId: applicant.id,
            status: CoursePurchaseStatus.PAID,
        },
        include: {
            course: true,
            applicant: {
                include: { user: { select: { email: true, name: true } } },
            },
        },
    });
    if (!row) {
        throw new ApiError(status.NOT_FOUND, "Receipt not found");
    }
    return row;
};
//======== Build receipt PDF =========
const buildReceiptPdfBuffer = async (purchaseId, userId) => {
    const p = await getMyPaidPurchase(userId, purchaseId);
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({ margin: 50, size: "A4" });
        const chunks = [];
        doc.on("data", (c) => chunks.push(c));
        doc.on("end", () => resolve(Buffer.concat(chunks)));
        doc.on("error", reject);
        doc.fontSize(20).text("QuickHire — Course receipt", { underline: true });
        doc.moveDown();
        doc.fontSize(11);
        doc.text(`Receipt no.: ${p.receiptNumber ?? p.id}`);
        doc.text(`Date: ${p.paidAt ? new Date(p.paidAt).toISOString() : ""}`);
        doc.moveDown();
        doc.text(`Course: ${p.course.title}`);
        doc.text(`Access: ${p.course.accessDuration.replace(/_/g, " ")}`);
        if (p.accessExpiresAt) {
            doc.text(`Access valid until: ${new Date(p.accessExpiresAt).toISOString()}`);
        }
        else {
            doc.text("Access: unlimited");
        }
        doc.moveDown();
        doc.text(`Amount paid: ${(p.amount / 100).toFixed(2)} ${p.currency.toUpperCase()}`);
        if (p.stripePaymentIntentId) {
            doc.text(`Payment ref: ${p.stripePaymentIntentId}`);
        }
        doc.moveDown();
        doc.text(`Bill to: ${p.applicant.user?.name ?? "Applicant"}`);
        doc.text(`Email: ${p.applicant.user?.email ?? ""}`);
        doc.end();
    });
};
//======== Stripe webhook — fulfill checkout session =========
const fulfillCheckoutSession = async (session) => {
    const purchaseId = session.client_reference_id ?? session.metadata?.purchaseId;
    if (!purchaseId || !session.id) {
        console.warn("[course-webhook] skip: missing purchaseId or session.id", JSON.stringify({
            client_reference_id: session.client_reference_id,
            metadata: session.metadata,
            sessionId: session.id,
        }));
        return;
    }
    const purchase = await prisma.coursePurchase.findUnique({
        where: { id: purchaseId },
        include: { course: true },
    });
    if (!purchase) {
        console.warn("[course-webhook] skip: no purchase row for id", purchaseId);
        return;
    }
    if (purchase.status === CoursePurchaseStatus.PAID) {
        console.info("[course-webhook] skip: already PAID", purchaseId);
        return;
    }
    if (session.payment_status !== "paid") {
        console.warn("[course-webhook] skip: payment_status is not paid:", session.payment_status, "session", session.id);
        return;
    }
    const paidTotal = session.amount_total;
    const expectedMinor = Number(purchase.amount);
    const stripeMinor = paidTotal == null ? null : Number(paidTotal);
    if (stripeMinor != null && stripeMinor !== expectedMinor) {
        console.error("[course-webhook] skip: amount mismatch — Stripe amount_total", stripeMinor, "DB purchase.amount", expectedMinor, "purchaseId", purchaseId);
        return;
    }
    const paidAt = new Date();
    const accessExpiresAt = computeAccessExpiresAt(paidAt, purchase.course.accessDuration);
    const receiptNumber = makeReceiptNumber();
    await prisma.coursePurchase.update({
        where: { id: purchase.id },
        data: {
            status: CoursePurchaseStatus.PAID,
            paidAt,
            stripePaymentIntentId: typeof session.payment_intent === "string"
                ? session.payment_intent
                : session.payment_intent?.id ?? null,
            accessExpiresAt,
            receiptNumber,
        },
    });
    console.info("[course-webhook] purchase marked PAID", purchaseId, "receipt", receiptNumber);
};
export const CourseService = {
    listPublishedCourses,
    getPublishedCourse,
    listAllCoursesAdmin,
    createCourse,
    updateCourse,
    deleteCourse,
    createCheckoutSession,
    listMyPurchases,
    getMyPaidPurchase,
    buildReceiptPdfBuffer,
    fulfillCheckoutSession,
};
//# sourceMappingURL=course.service.js.map