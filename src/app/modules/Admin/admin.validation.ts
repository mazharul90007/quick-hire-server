import { z } from "zod";
import {
  UserRole,
  UserStatus,
  UserType,
  CompanySize,
  Subscription,
} from "../../../../generated/prisma/enums";

const updateApplicantSchema = z
  .object({
    name: z.string().max(200).optional(),
    address: z.string().max(500).optional(),
    phone: z.string().max(50).optional(),
    profilePhoto: z.string().max(2000).optional(),
    cv: z.string().max(2000).optional(),
    userType: z.nativeEnum(UserType).optional(),
  })
  .strict();

const updateRecruiterSchema = z
  .object({
    recruiterName: z.string().max(200).optional(),
    recruiterPhoto: z.string().max(2000).optional(),
    recruiterPhone: z.string().max(50).optional(),
    recruiterWorkEmail: z.string().max(200).optional(),
    companyName: z.string().max(200).optional(),
    companyLogo: z.string().max(2000).optional(),
    companyWebsite: z.string().max(500).optional(),
    companyFacebookId: z.string().max(200).optional(),
    companyLinkedInId: z.string().max(200).optional(),
    companySize: z.nativeEnum(CompanySize).optional(),
    companyAddress: z.string().max(500).optional(),
    industryId: z.string().uuid().optional().nullable(),
    subIndustryId: z.string().uuid().optional().nullable(),
    isVerified: z.boolean().optional(),
    subscriptionPlan: z.nativeEnum(Subscription).optional(),
  })
  .strict();

const updateAdminProfileSchema = z
  .object({
    name: z.string().max(200).optional(),
    address: z.string().max(500).optional(),
    phone: z.string().max(50).optional(),
    profilePhoto: z.string().max(2000).optional(),
  })
  .strict();

const updateUserRoleSchema = z
  .object({
    role: z.nativeEnum(UserRole),
  })
  .strict();

const updateUserStatusSchema = z
  .object({
    status: z.nativeEnum(UserStatus),
  })
  .strict();

export const adminValidations = {
  updateApplicantSchema,
  updateRecruiterSchema,
  updateAdminProfileSchema,
  updateUserRoleSchema,
  updateUserStatusSchema,
};
