import { z } from "zod";
import { UserStatus, UserType, CompanySize, Subscription, } from "../../../../generated/prisma/enums";
//==========Update Applicant (body schema)=========
const updateApplicantSchema = z
    .object({
    name: z.string().max(200).optional(),
    address: z.string().max(500).optional(),
    phone: z.string().max(50).optional(),
    image: z.string().max(2000).optional(),
    cv: z.string().max(2000).optional(),
    userType: z.enum(UserType).optional(),
})
    .strict();
//==========Update Recruiter (body schema)=========
const updateRecruiterSchema = z
    .object({
    recruiterName: z.string().max(200).optional(),
    image: z.string().max(2000).optional(),
    recruiterPhone: z.string().max(50).optional(),
    recruiterWorkEmail: z.string().max(200).optional(),
    companyName: z.string().max(200).optional(),
    companyLogo: z.string().max(2000).optional(),
    companyWebsite: z.string().max(500).optional(),
    companyFacebookId: z.string().max(200).optional(),
    companyLinkedInId: z.string().max(200).optional(),
    companySize: z.enum(CompanySize).optional(),
    companyAddress: z.string().max(500).optional(),
    industryId: z.uuid().optional().nullable(),
    subIndustryId: z.uuid().optional().nullable(),
    isVerified: z.boolean().optional(),
    subscriptionPlan: z.enum(Subscription).optional(),
})
    .strict();
//==========Update Admin Profile (by id, body schema)=========
const updateAdminProfileSchema = z
    .object({
    name: z.string().max(200).optional(),
    address: z.string().max(500).optional(),
    phone: z.string().max(50).optional(),
    image: z.string().max(2000).optional(),
})
    .strict();
//==========Update Admin Profile (self, body schema)=========
/** Staff self-service profile (multipart files, no URL strings). */
const updateMyProfileSchema = z
    .object({
    name: z.string().max(200).optional(),
    address: z.string().max(500).optional(),
    phone: z.string().max(50).optional(),
})
    .strict();
//==========Update User Status (body schema)=========
const updateUserStatusSchema = z
    .object({
    status: z.enum(UserStatus),
})
    .strict();
export const adminValidations = {
    updateApplicantSchema,
    updateRecruiterSchema,
    updateAdminProfileSchema,
    updateMyProfileSchema,
    updateUserStatusSchema,
};
//# sourceMappingURL=admin.validation.js.map