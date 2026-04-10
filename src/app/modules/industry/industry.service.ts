import { prisma } from "../../../lib/prisma";
import { ICreateIndustry } from "./industry.interface";

//===============Create Industry=================
const createIndustry = async (payload: ICreateIndustry) => {
  return await prisma.$transaction(async (tx) => {
    const result = await tx.industry.create({
      data: {
        name: payload.name,
        logo: payload.logo ?? null,
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
      _count: {
        select: { jobs: true },
      },
      subIndustries: {
        select: {
          id: true,
          name: true,
          _count: {
            select: { jobs: true },
          },
        },
      },
    },
  });
};

//=================Update Industry Data==================
const updateIndustry = async (
  id: string,
  payload: { name?: string; logo?: string | null },
) => {
  return await prisma.industry.update({
    where: { id },
    data: {
      ...(payload.name !== undefined && { name: payload.name }),
      ...(payload.logo !== undefined && { logo: payload.logo }),
    },
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
