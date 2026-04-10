import { z } from "zod";
declare const createJobValidationSchema: z.ZodObject<{
    industryId: z.ZodUUID;
    subIndustryId: z.ZodUUID;
    title: z.ZodString;
    location: z.ZodOptional<z.ZodString>;
    district: z.ZodOptional<z.ZodString>;
    vacancy: z.ZodOptional<z.ZodNumber>;
    age: z.ZodOptional<z.ZodString>;
    salary: z.ZodOptional<z.ZodString>;
    experience: z.ZodOptional<z.ZodString>;
    education: z.ZodOptional<z.ZodArray<z.ZodString>>;
    additionalRequirements: z.ZodOptional<z.ZodArray<z.ZodString>>;
    responsibilities: z.ZodOptional<z.ZodArray<z.ZodString>>;
    requiredSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    description: z.ZodOptional<z.ZodString>;
    benefits: z.ZodOptional<z.ZodArray<z.ZodString>>;
    jobType: z.ZodOptional<z.ZodEnum<{
        REMOTE: "REMOTE";
        ONSITE: "ONSITE";
        HYBRID: "HYBRID";
    }>>;
    employmentType: z.ZodOptional<z.ZodEnum<{
        FULL_TIME: "FULL_TIME";
        PART_TIME: "PART_TIME";
        CONTRACTUAL: "CONTRACTUAL";
        INTERNSHIP: "INTERNSHIP";
        FREELANCE: "FREELANCE";
    }>>;
    featured: z.ZodOptional<z.ZodBoolean>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    deadline: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateJobPayload = z.infer<typeof createJobValidationSchema>;
declare const updateJobValidationSchema: z.ZodObject<{
    industryId: z.ZodOptional<z.ZodUUID>;
    subIndustryId: z.ZodOptional<z.ZodUUID>;
    title: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    district: z.ZodOptional<z.ZodString>;
    vacancy: z.ZodOptional<z.ZodNumber>;
    age: z.ZodOptional<z.ZodString>;
    salary: z.ZodOptional<z.ZodString>;
    experience: z.ZodOptional<z.ZodString>;
    education: z.ZodOptional<z.ZodArray<z.ZodString>>;
    additionalRequirements: z.ZodOptional<z.ZodArray<z.ZodString>>;
    responsibilities: z.ZodOptional<z.ZodArray<z.ZodString>>;
    requiredSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    description: z.ZodOptional<z.ZodString>;
    benefits: z.ZodOptional<z.ZodArray<z.ZodString>>;
    jobType: z.ZodOptional<z.ZodEnum<{
        REMOTE: "REMOTE";
        ONSITE: "ONSITE";
        HYBRID: "HYBRID";
    }>>;
    employmentType: z.ZodOptional<z.ZodEnum<{
        FULL_TIME: "FULL_TIME";
        PART_TIME: "PART_TIME";
        CONTRACTUAL: "CONTRACTUAL";
        INTERNSHIP: "INTERNSHIP";
        FREELANCE: "FREELANCE";
    }>>;
    featured: z.ZodOptional<z.ZodBoolean>;
    isVerified: z.ZodOptional<z.ZodBoolean>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    status: z.ZodOptional<z.ZodEnum<{
        ACTIVE: "ACTIVE";
        DELETED: "DELETED";
        PAUSED: "PAUSED";
    }>>;
    deadline: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strip>;
export type UpdateJobPayload = z.infer<typeof updateJobValidationSchema>;
export declare const jobValidations: {
    createJobValidationSchema: z.ZodObject<{
        industryId: z.ZodUUID;
        subIndustryId: z.ZodUUID;
        title: z.ZodString;
        location: z.ZodOptional<z.ZodString>;
        district: z.ZodOptional<z.ZodString>;
        vacancy: z.ZodOptional<z.ZodNumber>;
        age: z.ZodOptional<z.ZodString>;
        salary: z.ZodOptional<z.ZodString>;
        experience: z.ZodOptional<z.ZodString>;
        education: z.ZodOptional<z.ZodArray<z.ZodString>>;
        additionalRequirements: z.ZodOptional<z.ZodArray<z.ZodString>>;
        responsibilities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        requiredSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        description: z.ZodOptional<z.ZodString>;
        benefits: z.ZodOptional<z.ZodArray<z.ZodString>>;
        jobType: z.ZodOptional<z.ZodEnum<{
            REMOTE: "REMOTE";
            ONSITE: "ONSITE";
            HYBRID: "HYBRID";
        }>>;
        employmentType: z.ZodOptional<z.ZodEnum<{
            FULL_TIME: "FULL_TIME";
            PART_TIME: "PART_TIME";
            CONTRACTUAL: "CONTRACTUAL";
            INTERNSHIP: "INTERNSHIP";
            FREELANCE: "FREELANCE";
        }>>;
        featured: z.ZodOptional<z.ZodBoolean>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        deadline: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    updateJobValidationSchema: z.ZodObject<{
        industryId: z.ZodOptional<z.ZodUUID>;
        subIndustryId: z.ZodOptional<z.ZodUUID>;
        title: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodString>;
        district: z.ZodOptional<z.ZodString>;
        vacancy: z.ZodOptional<z.ZodNumber>;
        age: z.ZodOptional<z.ZodString>;
        salary: z.ZodOptional<z.ZodString>;
        experience: z.ZodOptional<z.ZodString>;
        education: z.ZodOptional<z.ZodArray<z.ZodString>>;
        additionalRequirements: z.ZodOptional<z.ZodArray<z.ZodString>>;
        responsibilities: z.ZodOptional<z.ZodArray<z.ZodString>>;
        requiredSkills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        description: z.ZodOptional<z.ZodString>;
        benefits: z.ZodOptional<z.ZodArray<z.ZodString>>;
        jobType: z.ZodOptional<z.ZodEnum<{
            REMOTE: "REMOTE";
            ONSITE: "ONSITE";
            HYBRID: "HYBRID";
        }>>;
        employmentType: z.ZodOptional<z.ZodEnum<{
            FULL_TIME: "FULL_TIME";
            PART_TIME: "PART_TIME";
            CONTRACTUAL: "CONTRACTUAL";
            INTERNSHIP: "INTERNSHIP";
            FREELANCE: "FREELANCE";
        }>>;
        featured: z.ZodOptional<z.ZodBoolean>;
        isVerified: z.ZodOptional<z.ZodBoolean>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        status: z.ZodOptional<z.ZodEnum<{
            ACTIVE: "ACTIVE";
            DELETED: "DELETED";
            PAUSED: "PAUSED";
        }>>;
        deadline: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strip>;
};
export {};
//# sourceMappingURL=job.validation.d.ts.map