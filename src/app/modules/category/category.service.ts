import { prisma } from "../../../lib/prisma";
import ApiError from "../../errors/ApiErrors";

//==============Create Category==============
const createCategory = async (userId: string, title: string) => {
  //verify user
  const isExistUser = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!isExistUser) {
    throw new ApiError(400, "User not found");
  }

  const result = await prisma.category.create({
    data: {
      userId: userId,
      title: title,
    },
  });

  return result;
};

//==============Get All Categories==============
const getAllCategories = async () => {
  const result = await prisma.category.findMany({
    include: {
      jobs: {
        select: {
          id: true,
          title: true,
          companyName: true,
          district: true,
          location: true,
          salary: true,
          jobType: true,
        },
      },
    },
  });

  return result;
};

export const categoryServices = {
  createCategory,
  getAllCategories,
};
