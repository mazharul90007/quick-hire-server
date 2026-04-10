import { z } from "zod";
/** Multipart `data` JSON; files are separate fields. */
export declare const updateMyProfileSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type UpdateMyApplicantProfileInput = z.infer<typeof updateMyProfileSchema>;
export declare const applicantValidation: {
    updateMyProfileSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
};
//# sourceMappingURL=applicant.validation.d.ts.map