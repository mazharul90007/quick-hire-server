import { z } from "zod";

const createIndustry = z.object({
  name: z.string("Industry name is required"),
});

export const IndustryValidation = {
  createIndustry,
};
