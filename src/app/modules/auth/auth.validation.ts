import { z } from "zod";

const createApplicant = z.object({
  email: z.string().email("Valid email is required"),
  password: z.string().min(6, "Password is required (min 6 chars)"),
  applicant: z.object({
    name: z.string().optional(),
    address: z.string().optional(),
    phone: z.string().optional(),
  }),
});

const createAdmin = z.object({
  password: z.string().min(6),
  admin: z.object({
    name: z.string().optional(),
    email: z.string().email(),
    address: z.string().optional(),
    phone: z.string().optional(),
  }),
});
const forgetPassword = z.object({
  email: z.string().email(),
});
const resetPassword = z.object({
  newPassword: z.string().min(6),
  token: z.string(),
});

const createRecruiter = z.object({
  email: z.string().email("Valid email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  recruiter: z.object({
    recruiterName: z.string().optional(),
    recruiterPhone: z.string().optional(),
    recruiterWorkEmail: z
      .string()
      .email("Valid work email is required")
      .optional(),
    companyName: z.string().optional(),
    companyWebsite: z.string().url("Valid website URL is required").optional(),
    companyFacebookId: z.string().optional(),
    companyLinkedInId: z.string().optional(),
    companySize: z.string().optional(),
    companyAddress: z.string().optional(),
    industryId: z.string().optional(),
    subIndustryId: z.string().optional(),
  }),
});

export const AuthValidation = {
  createApplicant,
  createAdmin,
  forgetPassword,
  resetPassword,
  createRecruiter,
};
