import { z } from "zod";
const createCategoryValidationSchema = z.object({
    title: z.string().min(1, "Category title required"),
});
export const categoryValidation = {
    createCategoryValidationSchema,
};
//# sourceMappingURL=category.validation.js.map