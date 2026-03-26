import { z } from "zod";

const createSubIndustry = z.object({
  name: z.string("Sub-industry name is required"),
  industryId: z.string("Industry ID is required"),
});

export const SubIndustryValidation = {
  createSubIndustry,
};
