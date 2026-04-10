import { z } from "zod";
export declare const SubIndustryValidation: {
    createSubIndustry: z.ZodObject<{
        name: z.ZodString;
        industryId: z.ZodString;
    }, z.core.$strip>;
    updateSubIndustry: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        industryId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
//# sourceMappingURL=subIndustry.validation.d.ts.map