import { z } from "zod";
export declare const jobValidations: {
    createJobValidationSchema: z.ZodObject<{
        categoryId: z.ZodString;
        title: z.ZodString;
        companyName: z.ZodOptional<z.ZodString>;
        companyDetails: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodString>;
        district: z.ZodOptional<z.ZodString>;
        vacancy: z.ZodOptional<z.ZodNumber>;
        age: z.ZodOptional<z.ZodString>;
        salary: z.ZodOptional<z.ZodString>;
        experience: z.ZodOptional<z.ZodString>;
        education: z.ZodOptional<z.ZodString>;
        additionalReqirements: z.ZodOptional<z.ZodArray<z.ZodString>>;
        responsibilities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        requiredSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        description: z.ZodOptional<z.ZodString>;
        benefits: z.ZodOptional<z.ZodArray<z.ZodString>>;
        jobType: z.ZodEnum<{
            REMOTE: "REMOTE";
            ONSITE: "ONSITE";
            HYBRID: "HYBRID";
        }>;
        employmentType: z.ZodEnum<{
            FULL_TIME: "FULL_TIME";
            PART_TIME: "PART_TIME";
            CONTRACTUAL: "CONTRACTUAL";
            INTERNSHIP: "INTERNSHIP";
            FREELANCE: "FREELANCE";
        }>;
        featured: z.ZodOptional<z.ZodBoolean>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        deadline: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
//# sourceMappingURL=job.validation.d.ts.map