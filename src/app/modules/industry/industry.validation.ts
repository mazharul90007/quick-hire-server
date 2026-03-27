import { z } from "zod";

const createIndustry = z.object({
  name: z.string("Industry name is required"),
});
const updateIndustry = z.object({
  name: z.string().optional(),
});

export const IndustryValidation = {
  createIndustry,
  updateIndustry,
};
