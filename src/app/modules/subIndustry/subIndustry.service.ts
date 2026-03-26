import { prisma } from "../../../lib/prisma";
import { ICreateSubIndustry } from "./subIndustry.interface";

const createSubIndustry = async (payload: ICreateSubIndustry) => {
  return await prisma.subIndustry.create({
    data: payload,
  });
};

export const SubIndustryService = {
  createSubIndustry,
};
