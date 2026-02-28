import { prisma } from "../../../lib/prisma";
import ApiError from "../../errors/ApiErrors";

//===============Create Job=================
const createJob = async (userId: string, payload: any) => {
  //verify user
  const isExistUser = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!isExistUser) {
    throw new ApiError(400, "User not found");
  }

  // Handle date format
  const jobData = {
    ...payload,
    userId: userId,
    deadline: payload.deadline ? new Date(payload.deadline) : undefined,
  };

  const result = await prisma.job.create({
    data: jobData,
  });

  return result;
};

//===============Get all Jobs=================

export const jobServices = {
  createJob,
};
