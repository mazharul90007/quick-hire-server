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

export const AuthValidation = {
  createApplicant,
  createAdmin,
  forgetPassword,
  resetPassword,
};
