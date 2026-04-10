import { z } from "zod";
/** Matches Prisma enum CourseAccessDuration */
export declare const courseAccessDurationSchema: z.ZodEnum<{
    MONTHS_6: "MONTHS_6";
    MONTHS_12: "MONTHS_12";
    UNLIMITED: "UNLIMITED";
}>;
/** Admin: create a sellable course (`priceAmount` = major units, may be decimal e.g. 99.99) */
export declare const createCourseSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodOptional<z.ZodString>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    priceAmount: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
    accessDuration: z.ZodDefault<z.ZodEnum<{
        MONTHS_6: "MONTHS_6";
        MONTHS_12: "MONTHS_12";
        UNLIMITED: "UNLIMITED";
    }>>;
    thumbnailUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    isPublished: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strict>;
/** Admin: update fields */
/** Applicant: start Stripe checkout for a course */
export declare const checkoutCourseSchema: z.ZodObject<{
    courseId: z.ZodString;
}, z.core.$strict>;
export declare const updateCourseSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    priceAmount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodString>;
    accessDuration: z.ZodOptional<z.ZodEnum<{
        MONTHS_6: "MONTHS_6";
        MONTHS_12: "MONTHS_12";
        UNLIMITED: "UNLIMITED";
    }>>;
    thumbnailUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    isPublished: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const courseValidation: {
    createCourseSchema: z.ZodObject<{
        title: z.ZodString;
        slug: z.ZodOptional<z.ZodString>;
        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        priceAmount: z.ZodNumber;
        currency: z.ZodDefault<z.ZodString>;
        accessDuration: z.ZodDefault<z.ZodEnum<{
            MONTHS_6: "MONTHS_6";
            MONTHS_12: "MONTHS_12";
            UNLIMITED: "UNLIMITED";
        }>>;
        thumbnailUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        isPublished: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, z.core.$strict>;
    updateCourseSchema: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        slug: z.ZodOptional<z.ZodString>;
        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        priceAmount: z.ZodOptional<z.ZodNumber>;
        currency: z.ZodOptional<z.ZodString>;
        accessDuration: z.ZodOptional<z.ZodEnum<{
            MONTHS_6: "MONTHS_6";
            MONTHS_12: "MONTHS_12";
            UNLIMITED: "UNLIMITED";
        }>>;
        thumbnailUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        isPublished: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>;
    checkoutCourseSchema: z.ZodObject<{
        courseId: z.ZodString;
    }, z.core.$strict>;
};
//# sourceMappingURL=course.validation.d.ts.map