import { z } from "zod";
export declare const applicationValidation: {
    createApplicationValidationSchema: z.ZodObject<{
        jobId: z.ZodString;
        name: z.ZodString;
        email: z.ZodString;
        resume_link: z.ZodString;
        cover_note: z.ZodOptional<z.ZodString>;
        expectedSalary: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
//# sourceMappingURL=application.validation.d.ts.map