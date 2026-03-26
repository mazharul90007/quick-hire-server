import { prisma } from "../../../lib/prisma";
import { ICreateIndustry } from "./industry.interface";

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

export const IndustryService = {
  createIndustry,
};
