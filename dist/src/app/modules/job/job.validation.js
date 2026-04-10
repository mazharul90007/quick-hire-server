import { z } from "zod";
const createJobValidationSchema = z.object({
    industryId: z.uuid("Valid industry id is required"),
    subIndustryId: z.uuid("Valid sub-industry id is required"),
    title: z.string().min(1, "Title is required"),
    location: z.string().optional(),
    district: z.string().optional(),
    vacancy: z.number().int().positive().optional(),
    age: z.string().optional(),
    salary: z.string().optional(),
    experience: z.string().optional(),
    education: z.array(z.string().max(500)).max(50).optional(),
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
const updateJobValidationSchema = z.object({
    industryId: z.uuid("Valid industry id is required").optional(),
    subIndustryId: z.uuid("Valid sub-industry id is required").optional(),
    title: z.string().min(1).optional(),
    location: z.string().optional(),
    district: z.string().optional(),
    vacancy: z.number().int().positive().optional(),
    age: z.string().optional(),
    salary: z.string().optional(),
    experience: z.string().optional(),
    education: z.array(z.string().max(500)).max(50).optional(),
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
    isVerified: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(["ACTIVE", "PAUSED", "DELETED"]).optional(),
    deadline: z.union([z.string().datetime(), z.null()]).optional(),
});
export const jobValidations = {
    createJobValidationSchema,
    updateJobValidationSchema,
};
//# sourceMappingURL=job.validation.js.map