import { Request, Response } from "express";
import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CourseService } from "./course.service";
import { stripe, isStripeConfigured } from "../../../lib/stripe";

//======== Public catalog (no login) =========

//======== List published courses =========
const listPublished = catchAsync(async (_req: Request, res: Response) => {
  const data = await CourseService.listPublishedCourses();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Courses fetched",
    data,
  });
});

//======== Get one published course =========
const getPublishedOne = catchAsync(async (req: Request, res: Response) => {
  const data = await CourseService.getPublishedCourse(req.params.idOrSlug as string);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Course fetched",
    data,
  });
});

//======== Admin — course management =========

//======== List all courses (admin) =========
const adminListAll = catchAsync(async (_req: Request, res: Response) => {
  const data = await CourseService.listAllCoursesAdmin();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Courses fetched",
    data,
  });
});

//======== Create course =========
const adminCreate = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const data = await CourseService.createCourse(userId, req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Course created",
    data,
  });
});

//======== Update course =========
const adminUpdate = catchAsync(async (req: Request, res: Response) => {
  const data = await CourseService.updateCourse(req.params.courseId as string, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Course updated",
    data,
  });
});

//======== Delete course (or unpublish if has paid sales) =========
const adminDelete = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.deleteCourse(req.params.courseId as string);
  if (result === null) {
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Course deleted",
      data: null,
    });
  } else {
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Course has paid purchases; it was unpublished instead of deleted",
      data: result,
    });
  }
});

//======== Applicant — checkout & receipts =========

//======== Start Stripe checkout =========
const applicantCheckout = catchAsync(async (req: Request, res: Response) => {
  if (!isStripeConfigured()) {
    sendResponse(res, {
      statusCode: status.SERVICE_UNAVAILABLE,
      success: false,
      message: "Stripe is not configured on the server",
      data: null,
    });
    return;
  }
  const userId = req.user?.id as string;
  const { courseId } = req.body as { courseId: string };
  const data = await CourseService.createCheckoutSession(userId, courseId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Redirect to checkoutUrl to complete payment",
    data,
  });
});

//======== List my course purchases =========
const applicantMyPurchases = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const data = await CourseService.listMyPurchases(userId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Purchases fetched",
    data,
  });
});

//======== Download receipt PDF =========
const applicantReceiptPdf = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const purchaseId = req.params.purchaseId as string;
  const pdf = await CourseService.buildReceiptPdfBuffer(purchaseId, userId);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="course-receipt-${purchaseId}.pdf"`,
  );
  res.status(status.OK).send(pdf);
});

//======== Stripe webhook (raw body; mounted in app.ts before JSON parser) =========

const stripeWebhook = catchAsync(async (req: Request, res: Response) => {
  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) {
    res.status(status.SERVICE_UNAVAILABLE).send("Stripe not configured");
    return;
  }

  const sig = req.headers["stripe-signature"];
  if (!sig || typeof sig !== "string") {
    res.status(status.BAD_REQUEST).send("Missing stripe-signature");
    return;
  }

  let event: import("stripe").Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error("[course-webhook] signature verification failed — check STRIPE_WEBHOOK_SECRET matches this endpoint in Stripe Dashboard (or `stripe listen` output)", err);
    res.status(status.BAD_REQUEST).send("Webhook signature verification failed");
    return;
  }

  console.info("[course-webhook] event", event.type, event.id);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as import("stripe").Stripe.Checkout.Session;
    await CourseService.fulfillCheckoutSession(session);
  }

  res.status(status.OK).json({ received: true });
});

export const courseController = {
  listPublished,
  getPublishedOne,
  adminListAll,
  adminCreate,
  adminUpdate,
  adminDelete,
  applicantCheckout,
  applicantMyPurchases,
  applicantReceiptPdf,
  stripeWebhook,
};
