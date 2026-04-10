import { z } from "zod";

/** Matches Prisma enum CourseAccessDuration */
export const courseAccessDurationSchema = z.enum([
  "MONTHS_6",
  "MONTHS_12",
  "UNLIMITED",
]);

/** Admin: create a sellable course (`priceAmount` = major units, may be decimal e.g. 99.99) */
export const createCourseSchema = z
  .object({
    title: z.string().min(2).max(200),
    slug: z
      .string()
      .min(2)
      .max(120)
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug: lowercase letters, numbers, hyphens")
      .optional(),
    description: z.string().max(20000).optional().nullable(),
    priceAmount: z.number().positive().finite(),
    currency: z.string().min(3).max(10).default("bdt"),
    accessDuration: courseAccessDurationSchema.default("UNLIMITED"),
    thumbnailUrl: z.string().url().optional().nullable(),
    isPublished: z.boolean().optional().default(false),
  })
  .strict();

/** Admin: update fields */
/** Applicant: start Stripe checkout for a course */
export const checkoutCourseSchema = z
  .object({
    courseId: z.string().uuid("Invalid course id"),
  })
  .strict();

export const updateCourseSchema = z
  .object({
    title: z.string().min(2).max(200).optional(),
    slug: z
      .string()
      .min(2)
      .max(120)
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .optional(),
    description: z.string().max(20000).optional().nullable(),
    priceAmount: z.number().positive().finite().optional(),
    currency: z.string().min(3).max(10).optional(),
    accessDuration: courseAccessDurationSchema.optional(),
    thumbnailUrl: z.string().url().optional().nullable(),
    isPublished: z.boolean().optional(),
  })
  .strict();

export const courseValidation = {
  createCourseSchema,
  updateCourseSchema,
  checkoutCourseSchema,
};
