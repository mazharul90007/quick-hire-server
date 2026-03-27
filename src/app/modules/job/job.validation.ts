import { z } from "zod";

const createJobValidationSchema = z.object({
  industryId: z.string().uuid("Valid industry id is required"),
  subIndustryId: z.string().uuid("Valid sub-industry id is required"),
  title: z.string().min(1, "Title is required"),
  location: z.string().optional(),
  district: z.string().optional(),
  vacancy: z.number().int().positive().optional(),
  age: z.string().optional(),
  salary: z.string().optional(),
  experience: z.string().optional(),
  education: z.string().optional(),
  additionalRequirements: z.array(z.string()).optional(),
  responsibilities: z.array(z.string()).optional(),
  requiredSkills: z.array(z.string()).optional(),
  description: z.string().optional(),
  benefits: z.array(z.string()).optional(),
  jobType: z.enum(["REMOTE", "ONSITE", "HYBRID"]).optional(),
  employmentType: z
    .enum([
      "FULL_TIME",
      "PART_TIME",
      "CONTRACTUAL",
      "INTERNSHIP",
      "FREELANCE",
    ])
    .optional(),
  featured: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  deadline: z.string().datetime().optional(),
});

export type CreateJobPayload = z.infer<typeof createJobValidationSchema>;

export const jobValidations = {
  createJobValidationSchema,
};
