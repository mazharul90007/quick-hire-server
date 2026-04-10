import { z } from "zod";
const createSubIndustry = z.object({
    name: z.string("Sub-industry name is required"),
    industryId: z.string("Industry ID is required"),
});
const updateSubIndustry = z.object({
    name: z.string().optional(),
    industryId: z.string().optional(),
});
export const SubIndustryValidation = {
    createSubIndustry,
    updateSubIndustry,
};
//# sourceMappingURL=subIndustry.validation.js.map