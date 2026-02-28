import { z } from "zod";
const createApplicationValidationSchema = z.object({
    jobId: z.string().min(1, "Job ID is required"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    resume_link: z.string().url("Invalid resume link URL"),
    cover_note: z.string().optional(),
    expectedSalary: z.string().optional(),
    userId: z.string().optional(),
});
export const applicationValidation = {
    createApplicationValidationSchema,
};
//# sourceMappingURL=application.validation.js.map