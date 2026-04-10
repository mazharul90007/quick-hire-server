import { z } from "zod";

const createIndustry = z.object({
  name: z.string().min(1, "Industry name is required"),
});
const updateIndustry = z.object({
  name: z.string().min(1).optional(),
});

export const IndustryValidation = {
  createIndustry,
  updateIndustry,
};
