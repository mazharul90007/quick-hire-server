import type { z } from "zod";
import type { createCourseSchema, updateCourseSchema } from "./course.validation";
import { CourseAccessDuration, CoursePurchaseStatus } from "../../../../generated/prisma/enums";
type CreateCourseInput = z.infer<typeof createCourseSchema>;
type UpdateCourseInput = z.infer<typeof updateCourseSchema>;
export declare const CourseService: {
    listPublishedCourses: () => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        description: string | null;
        slug: string;
        priceAmount: number;
        currency: string;
        accessDuration: CourseAccessDuration;
        thumbnailUrl: string | null;
    }[]>;
    getPublishedCourse: (idOrSlug: string) => Promise<{
        id: string;
        createdAt: Date;
        title: string;
        description: string | null;
        slug: string;
        priceAmount: number;
        currency: string;
        accessDuration: CourseAccessDuration;
        thumbnailUrl: string | null;
    }>;
    listAllCoursesAdmin: () => Promise<({
        _count: {
            purchases: number;
        };
        createdBy: {
            name: string | null;
            id: string;
            email: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        slug: string;
        priceAmount: number;
        currency: string;
        accessDuration: CourseAccessDuration;
        stripeProductId: string | null;
        stripePriceId: string | null;
        thumbnailUrl: string | null;
        isPublished: boolean;
        createdByUserId: string;
    })[]>;
    createCourse: (createdByUserId: string, payload: CreateCourseInput) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        slug: string;
        priceAmount: number;
        currency: string;
        accessDuration: CourseAccessDuration;
        stripeProductId: string | null;
        stripePriceId: string | null;
        thumbnailUrl: string | null;
        isPublished: boolean;
        createdByUserId: string;
    }>;
    updateCourse: (courseId: string, payload: UpdateCourseInput) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        slug: string;
        priceAmount: number;
        currency: string;
        accessDuration: CourseAccessDuration;
        stripeProductId: string | null;
        stripePriceId: string | null;
        thumbnailUrl: string | null;
        isPublished: boolean;
        createdByUserId: string;
    }>;
    deleteCourse: (courseId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        slug: string;
        priceAmount: number;
        currency: string;
        accessDuration: CourseAccessDuration;
        stripeProductId: string | null;
        stripePriceId: string | null;
        thumbnailUrl: string | null;
        isPublished: boolean;
        createdByUserId: string;
    } | null>;
    createCheckoutSession: (userId: string, courseId: string) => Promise<{
        checkoutUrl: string;
        purchaseId: string;
    }>;
    listMyPurchases: (userId: string) => Promise<({
        course: {
            id: string;
            title: string;
            slug: string;
            accessDuration: CourseAccessDuration;
            thumbnailUrl: string | null;
        };
    } & {
        status: CoursePurchaseStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        applicantId: string;
        currency: string;
        courseId: string;
        amount: number;
        stripeCheckoutSessionId: string | null;
        stripePaymentIntentId: string | null;
        paidAt: Date | null;
        accessExpiresAt: Date | null;
        receiptNumber: string | null;
    })[]>;
    getMyPaidPurchase: (userId: string, purchaseId: string) => Promise<{
        applicant: {
            user: {
                name: string | null;
                email: string;
            };
        } & {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            cv: string | null;
            address: string | null;
            phone: string | null;
            userType: import("../../../../generated/prisma/enums").UserType;
        };
        course: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            slug: string;
            priceAmount: number;
            currency: string;
            accessDuration: CourseAccessDuration;
            stripeProductId: string | null;
            stripePriceId: string | null;
            thumbnailUrl: string | null;
            isPublished: boolean;
            createdByUserId: string;
        };
    } & {
        status: CoursePurchaseStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        applicantId: string;
        currency: string;
        courseId: string;
        amount: number;
        stripeCheckoutSessionId: string | null;
        stripePaymentIntentId: string | null;
        paidAt: Date | null;
        accessExpiresAt: Date | null;
        receiptNumber: string | null;
    }>;
    buildReceiptPdfBuffer: (purchaseId: string, userId: string) => Promise<Buffer>;
    fulfillCheckoutSession: (session: import("stripe").Stripe.Checkout.Session) => Promise<void>;
};
export {};
//# sourceMappingURL=course.service.d.ts.map