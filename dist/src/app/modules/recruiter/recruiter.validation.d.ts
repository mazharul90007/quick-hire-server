import { z } from "zod";
/** Multipart `data` JSON; files are separate fields. */
export declare const updateMyProfileSchema: z.ZodObject<{
    recruiterName: z.ZodOptional<z.ZodString>;
    recruiterPhone: z.ZodOptional<z.ZodString>;
    recruiterWorkEmail: z.ZodOptional<z.ZodString>;
    companyName: z.ZodOptional<z.ZodString>;
    companyWebsite: z.ZodOptional<z.ZodString>;
    companyFacebookId: z.ZodOptional<z.ZodString>;
    companyLinkedInId: z.ZodOptional<z.ZodString>;
    companySize: z.ZodOptional<z.ZodEnum<{
        readonly SMALL: "SMALL";
        readonly MEDIUM: "MEDIUM";
        readonly LARGE: "LARGE";
        readonly VERY_LARGE: "VERY_LARGE";
        readonly ENTERPRISE: "ENTERPRISE";
    }>>;
    companyAddress: z.ZodOptional<z.ZodString>;
    industryId: z.ZodNullable<z.ZodOptional<z.ZodUUID>>;
    subIndustryId: z.ZodNullable<z.ZodOptional<z.ZodUUID>>;
}, z.core.$strict>;
export type UpdateMyRecruiterProfileInput = z.infer<typeof updateMyProfileSchema>;
export declare const recruiterValidation: {
    updateMyProfileSchema: z.ZodObject<{
        recruiterName: z.ZodOptional<z.ZodString>;
        recruiterPhone: z.ZodOptional<z.ZodString>;
        recruiterWorkEmail: z.ZodOptional<z.ZodString>;
        companyName: z.ZodOptional<z.ZodString>;
        companyWebsite: z.ZodOptional<z.ZodString>;
        companyFacebookId: z.ZodOptional<z.ZodString>;
        companyLinkedInId: z.ZodOptional<z.ZodString>;
        companySize: z.ZodOptional<z.ZodEnum<{
            readonly SMALL: "SMALL";
            readonly MEDIUM: "MEDIUM";
            readonly LARGE: "LARGE";
            readonly VERY_LARGE: "VERY_LARGE";
            readonly ENTERPRISE: "ENTERPRISE";
        }>>;
        companyAddress: z.ZodOptional<z.ZodString>;
        industryId: z.ZodNullable<z.ZodOptional<z.ZodUUID>>;
        subIndustryId: z.ZodNullable<z.ZodOptional<z.ZodUUID>>;
    }, z.core.$strict>;
};
//# sourceMappingURL=recruiter.validation.d.ts.map