import { z } from "zod";

const createJobValidationSchema = z.object({
  categoryId: z.string().min(1, "Category Id is required"),
  title: z.string().min(1, "Title is required"),
  companyName: z.string().optional(),
  companyDetails: z.string().optional(),
  location: z.string().optional(),
  district: z.string().optional(),
  vacancy: z.number().int().optional(),
  age: z.string().optional(),
  salary: z.string().optional(),
  experience: z.string().optional(),
  education: z.string().optional(),
  additionalReqirements: z.array(z.string()).optional(),
  responsibilities: z.array(z.string()).optional(),
  requiredSkills: z.array(z.string()).optional(),
  description: z.string().optional(),
  benefits: z.array(z.string()).optional(),
  jobType: z.enum(["REMOTE", "ONSITE", "HYBRID"]),
  tags: z.array(z.string()).optional(),
  deadline: z.string().optional(),
});

export const jobValidations = {
  createJobValidationSchema,
};
