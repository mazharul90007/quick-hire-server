import { prisma } from "../../../lib/prisma";
import { ICreateIndustry } from "./industry.interface";

//===============Create Industry=================
const createIndustry = async (payload: ICreateIndustry) => {
  return await prisma.$transaction(async (tx) => {
    const result = await tx.industry.create({
      data: {
        ...payload,
        subIndustries: {
          create: {
            name: "Others",
          },
        },
      },
      include: {
        subIndustries: true,
      },
    });

    return result;
  });
};

//=================Get all Industry======================
const getAllIndustries = async () => {
  return await prisma.industry.findMany({
    include: {
      subIndustries: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

//=================Update Industry Data==================
const updateIndustry = async (
  id: string,
  payload: Partial<ICreateIndustry>,
) => {
  return await prisma.industry.update({
    where: { id },
    data: payload,
    include: {
      subIndustries: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

export const IndustryService = {
  createIndustry,
  getAllIndustries,
  updateIndustry,
};
