import { z } from "zod";
/**
 * Parsed from multipart field `data` (JSON string) after `parseApplicationDataField`.
 * File `cv` is on `req.file` (validated separately).
 */
declare const createApplicationFormFieldsSchema: z.ZodObject<{
    jobId: z.ZodUUID;
    cover_note: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodOptional<z.ZodString>>;
    expectedSalary: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type CreateApplicationFormPayload = z.infer<typeof createApplicationFormFieldsSchema>;
/** Service input: form fields + Cloudinary URL for the uploaded PDF. */
export type CreateApplicationPayload = CreateApplicationFormPayload & {
    cv: string;
};
export declare const applicationValidation: {
    createApplicationFormFieldsSchema: z.ZodObject<{
        jobId: z.ZodUUID;
        cover_note: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodOptional<z.ZodString>>;
        expectedSalary: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
};
export {};
//# sourceMappingURL=application.validation.d.ts.map