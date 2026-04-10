import { z } from "zod";
export declare const adminValidations: {
    updateApplicantSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        cv: z.ZodOptional<z.ZodString>;
        userType: z.ZodOptional<z.ZodEnum<{
            readonly NORMAL: "NORMAL";
            readonly SILVER: "SILVER";
            readonly GOLD: "GOLD";
            readonly DIAMOND: "DIAMOND";
        }>>;
    }, z.core.$strict>;
    updateRecruiterSchema: z.ZodObject<{
        recruiterName: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        recruiterPhone: z.ZodOptional<z.ZodString>;
        recruiterWorkEmail: z.ZodOptional<z.ZodString>;
        companyName: z.ZodOptional<z.ZodString>;
        companyLogo: z.ZodOptional<z.ZodString>;
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
        isVerified: z.ZodOptional<z.ZodBoolean>;
        subscriptionPlan: z.ZodOptional<z.ZodEnum<{
            readonly FREE: "FREE";
            readonly SILVER: "SILVER";
            readonly GOLD: "GOLD";
            readonly DIAMOND: "DIAMOND";
        }>>;
    }, z.core.$strict>;
    updateAdminProfileSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    updateMyProfileSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    updateUserStatusSchema: z.ZodObject<{
        status: z.ZodEnum<{
            readonly ACTIVE: "ACTIVE";
            readonly BLOCKED: "BLOCKED";
            readonly DELETED: "DELETED";
        }>;
    }, z.core.$strict>;
};
//# sourceMappingURL=admin.validation.d.ts.map