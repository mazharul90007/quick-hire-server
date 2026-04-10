import type { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";
import ApiError from "../../errors/ApiErrors";
import status from "http-status";
import type { UpdateMyRecruiterProfileInput } from "./recruiter.validation";

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

export type RecruiterProfileFileUrls = {
  image?: string;
  companyLogo?: string;
};

const recruiterInclude = {
  user: { select: userSelect },
  industry: { select: { id: true, name: true } },
  subIndustry: { select: { id: true, name: true } },
} as const;

//==========Get Recruiter Profile=========
export async function getMyProfile(userId: string) {
  const row = await prisma.recruiter.findUnique({
    where: { userId },
    include: recruiterInclude,
  });
  if (!row || row.isDeleted) {
    throw new ApiError(status.NOT_FOUND, "Recruiter profile not found");
  }
  return row;
}

async function ensureSubIndustryMatchesIndustry(
  industryId: string | null | undefined,
  subIndustryId: string | null | undefined,
) {
  if (!subIndustryId || !industryId) return;
  const sub = await prisma.subIndustry.findUnique({
    where: { id: subIndustryId },
    select: { industryId: true },
  });
  if (!sub) {
    throw new ApiError(status.NOT_FOUND, "Sub-industry not found");
  }
  if (sub.industryId !== industryId) {
    throw new ApiError(
      status.BAD_REQUEST,
      "Sub-industry does not belong to the given industry",
    );
  }
}

//==========Update Recruiter Profile=========
export async function updateMyProfile(
  userId: string,
  data: UpdateMyRecruiterProfileInput,
  files: RecruiterProfileFileUrls,
) {
  const recruiter = await prisma.recruiter.findUnique({ where: { userId } });
  if (!recruiter || recruiter.isDeleted) {
    throw new ApiError(status.NOT_FOUND, "Recruiter profile not found");
  }

  await ensureSubIndustryMatchesIndustry(
    data.industryId ?? undefined,
    data.subIndustryId ?? undefined,
  );

  const userData: Prisma.UserUpdateInput = {};
  if (data.recruiterName !== undefined) userData.name = data.recruiterName;
  if (files.image) userData.image = files.image;

  const recData: Prisma.RecruiterUncheckedUpdateInput = {};
  if (data.recruiterName !== undefined) recData.recruiterName = data.recruiterName;
  if (data.recruiterPhone !== undefined) recData.recruiterPhone = data.recruiterPhone;
  if (data.recruiterWorkEmail !== undefined) {
    recData.recruiterWorkEmail = data.recruiterWorkEmail;
  }
  if (data.companyName !== undefined) recData.companyName = data.companyName;
  if (data.companyWebsite !== undefined) recData.companyWebsite = data.companyWebsite;
  if (data.companyFacebookId !== undefined) {
    recData.companyFacebookId = data.companyFacebookId;
  }
  if (data.companyLinkedInId !== undefined) {
    recData.companyLinkedInId = data.companyLinkedInId;
  }
  if (data.companySize !== undefined) recData.companySize = data.companySize;
  if (data.companyAddress !== undefined) {
    recData.companyAddress = data.companyAddress;
  }
  if (data.industryId !== undefined) recData.industryId = data.industryId;
  if (data.subIndustryId !== undefined) {
    recData.subIndustryId = data.subIndustryId;
  }
  if (files.companyLogo) recData.companyLogo = files.companyLogo;

  if (!Object.keys(userData).length && !Object.keys(recData).length) {
    return prisma.recruiter.findUniqueOrThrow({
      where: { id: recruiter.id },
      include: {
        user: { select: userSelect },
        industry: { select: { id: true, name: true } },
        subIndustry: { select: { id: true, name: true } },
      },
    });
  }

  await prisma.$transaction(async (tx) => {
    if (Object.keys(userData).length) {
      await tx.user.update({ where: { id: userId }, data: userData });
    }
    if (Object.keys(recData).length) {
      await tx.recruiter.update({ where: { id: recruiter.id }, data: recData });
    }
  });

  return prisma.recruiter.findUniqueOrThrow({
    where: { id: recruiter.id },
    include: {
      user: { select: userSelect },
      industry: { select: { id: true, name: true } },
      subIndustry: { select: { id: true, name: true } },
    },
  });
}
