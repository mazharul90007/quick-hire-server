import { z } from "zod";
export declare const IndustryValidation: {
    createIndustry: z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>;
    updateIndustry: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
//# sourceMappingURL=industry.validation.d.ts.map