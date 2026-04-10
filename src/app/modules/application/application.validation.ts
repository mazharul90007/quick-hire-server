import { z } from "zod";

/** Multipart text fields arrive as strings; normalize empty strings to undefined. */
const emptyToUndef = (v: unknown) =>
  v === "" || v === undefined || v === null ? undefined : v;

//==========Create Application (form fields schema)=========
/**
 * Parsed from multipart field `data` (JSON string) after `parseApplicationDataField`.
 * File `cv` is on `req.file` (validated separately).
 */
const createApplicationFormFieldsSchema = z.object({
  jobId: z.uuid("Valid job id is required"),
  cover_note: z.preprocess(emptyToUndef, z.string().optional()),
  expectedSalary: z.preprocess(emptyToUndef, z.string().optional()),
});

export type CreateApplicationFormPayload = z.infer<
  typeof createApplicationFormFieldsSchema
>;

/** Service input: form fields + Cloudinary URL for the uploaded PDF. */
export type CreateApplicationPayload = CreateApplicationFormPayload & {
  cv: string;
};

export const applicationValidation = {
  createApplicationFormFieldsSchema,
};
