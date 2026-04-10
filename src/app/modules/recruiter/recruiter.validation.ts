import { z } from "zod";
import { CompanySize } from "../../../../generated/prisma/enums";

//==========Update Recruiter Profile (body schema)=========
/** Multipart `data` JSON; files are separate fields. */
export const updateMyProfileSchema = z
  .object({
    recruiterName: z.string().max(200).optional(),
    recruiterPhone: z.string().max(50).optional(),
    recruiterWorkEmail: z.string().max(200).optional(),
    companyName: z.string().max(200).optional(),
    companyWebsite: z.string().max(500).optional(),
    companyFacebookId: z.string().max(200).optional(),
    companyLinkedInId: z.string().max(200).optional(),
    companySize: z.enum(CompanySize).optional(),
    companyAddress: z.string().max(500).optional(),
    industryId: z.uuid().optional().nullable(),
    subIndustryId: z.uuid().optional().nullable(),
  })
  .strict();

export type UpdateMyRecruiterProfileInput = z.infer<
  typeof updateMyProfileSchema
>;

export const recruiterValidation = { updateMyProfileSchema };
