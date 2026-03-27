import { prisma } from "../../../lib/prisma";
import { ICreateSubIndustry } from "./subIndustry.interface";

//==================Create subIndustries===================
const createSubIndustry = async (payload: ICreateSubIndustry) => {
  return await prisma.subIndustry.create({
    data: payload,
  });
};

//==================Get all subIndustries===================
const getAllSubIndustries = async () => {
  return await prisma.subIndustry.findMany({
    include: {
      industry: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

//==================Update subIndustry===================
const updateSubIndustry = async (id: string, payload: any) => {
  return await prisma.subIndustry.update({
    where: { id },
    data: payload,
    include: {
      industry: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

export const SubIndustryService = {
  createSubIndustry,
  getAllSubIndustries,
  updateSubIndustry,
};
