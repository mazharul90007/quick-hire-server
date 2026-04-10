import type { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";
import ApiError from "../../errors/ApiErrors";
import status from "http-status";
import type { UpdateMyApplicantProfileInput } from "./applicant.validation";

const userSelect = {
  id: true,
  email: true,
  name: true,
  image: true,
  role: true,
  address: true,
  emailVerified: true,
  status: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.UserSelect;

export type ApplicantProfileFileUrls = {
  image?: string;
  cv?: string;
};

//==========Get Applicant Profile=========
export async function getMyProfile(userId: string) {
  const row = await prisma.applicant.findUnique({
    where: { userId },
    include: { user: { select: userSelect } },
  });
  if (!row) {
    throw new ApiError(status.NOT_FOUND, "Applicant profile not found");
  }
  return row;
}

//==========Update Applicant Profile=========
export async function updateMyProfile(
  userId: string,
  data: UpdateMyApplicantProfileInput,
  files: ApplicantProfileFileUrls,
) {
  const applicant = await prisma.applicant.findUnique({ where: { userId } });
  if (!applicant) {
    throw new ApiError(status.NOT_FOUND, "Applicant profile not found");
  }

  const userData: Prisma.UserUpdateInput = {};
  if (data.name !== undefined) userData.name = data.name;
  if (data.address !== undefined) userData.address = data.address;
  if (files.image) userData.image = files.image;

  const appData: Prisma.ApplicantUpdateInput = {};
  if (data.name !== undefined) appData.name = data.name;
  if (data.address !== undefined) appData.address = data.address;
  if (data.phone !== undefined) appData.phone = data.phone;
  if (files.cv) appData.cv = files.cv;

  if (!Object.keys(userData).length && !Object.keys(appData).length) {
    return prisma.applicant.findUniqueOrThrow({
      where: { id: applicant.id },
      include: { user: { select: userSelect } },
    });
  }

  await prisma.$transaction(async (tx) => {
    if (Object.keys(userData).length) {
      await tx.user.update({ where: { id: userId }, data: userData });
    }
    if (Object.keys(appData).length) {
      await tx.applicant.update({
        where: { id: applicant.id },
        data: appData,
      });
    }
  });

  return prisma.applicant.findUniqueOrThrow({
    where: { id: applicant.id },
    include: { user: { select: userSelect } },
  });
}
