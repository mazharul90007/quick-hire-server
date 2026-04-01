import { z } from "zod";

/**
 * Body for "apply to a job".
 * Who is applying comes from the auth session, not from this payload.
 */
const createApplicationValidationSchema = z.object({
  /** Which job they are applying to (must be a real UUID in your DB). */
  jobId: z.string().uuid("Valid job id is required"),
  /** Optional message to the employer. */
  cover_note: z.string().optional(),
  /** Optional salary expectation as free text (e.g. "BDT 80,000"). */
  expectedSalary: z.string().optional(),
});

export type CreateApplicationPayload = z.infer<
  typeof createApplicationValidationSchema
>;

export const applicationValidation = {
  createApplicationValidationSchema,
};
