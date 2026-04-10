import { Prisma } from "../../../../generated/prisma/client";
import { UserRole } from "../../../../generated/prisma/enums";
import { prisma } from "../../../lib/prisma";
import ApiError from "../../errors/ApiErrors";
import calculatePagination from "../../helpers/paginationHelpers";
import {
  jobAllowedSortFields,
  jobEnumFilterFields,
  jobSearchableFields,
} from "./job.constant";
import type { CreateJobPayload, UpdateJobPayload } from "./job.validation";

//===============Create Job=================
const createJob = async (userId: string, payload: CreateJobPayload) => {
  const recruiter = await prisma.recruiter.findFirst({
    where: { userId, isDeleted: false },
  });

  if (!recruiter) {
    throw new ApiError(404, "Recruiter profile not found");
  }

  const subIndustry = await prisma.subIndustry.findUnique({
    where: { id: payload.subIndustryId },
    select: { id: true, industryId: true },
  });

  if (!subIndustry) {
    throw new ApiError(404, "Sub-industry not found");
  }

  if (subIndustry.industryId !== payload.industryId) {
    throw new ApiError(
      400,
      "Sub-industry does not belong to the given industry",
    );
  }

  const { industryId, subIndustryId, deadline, ...rest } = payload;

  const result = await prisma.job.create({
    data: {
      recruiterId: recruiter.id,
      industryId,
      subIndustryId,
      ...rest,
      isVerified: false,
      deadline: deadline ? new Date(deadline) : undefined,
    } as Prisma.JobUncheckedCreateInput,
  });

  return result;
};

//===============Get all Jobs=================
const getAllJobs = async (filters: any, options: any) => {
  const { searchTerm, ...filtersRemaining } = filters;
  let { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);

  const sortField = jobAllowedSortFields.includes(
    sortBy as (typeof jobAllowedSortFields)[number],
  )
    ? sortBy
    : "createdAt";
  sortOrder =
    String(sortOrder).toLowerCase() === "asc" ? "asc" : "desc";

  const filterData = Object.fromEntries(
    Object.entries(filtersRemaining).filter(
      ([_, v]) => v !== "" && v !== null && v !== undefined,
    ),
  );

  const andConditions: Prisma.JobWhereInput[] = [];

  if (searchTerm) {
    andConditions.push({
      OR: jobSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    if (filterData.featured !== undefined) {
      filterData.featured =
        filterData.featured === "true" || filterData.featured === true;
    }
    if (filterData.isVerified !== undefined) {
      filterData.isVerified =
        filterData.isVerified === "true" || filterData.isVerified === true;
    }

    andConditions.push({
      AND: Object.keys(filterData).map((key) => {
        const value = filterData[key];

        if (typeof value === "string" && value.includes(",")) {
          const list = value
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
          if (jobEnumFilterFields.includes(key)) {
            return { [key]: { in: list } };
          }
          return { [key]: { in: list, mode: "insensitive" } };
        }

        if (Array.isArray(value)) {
          if (jobEnumFilterFields.includes(key)) {
            return { [key]: { in: value } };
          }
          return { [key]: { in: value, mode: "insensitive" } };
        }

        if (jobEnumFilterFields.includes(key)) {
          return { [key]: value };
        }

        /* Prisma boolean filters: use shorthand, not { equals }, for nullable booleans */
        if (key === "featured" || key === "isVerified") {
          return { [key]: Boolean(value) };
        }

        return {
          [key]: {
            equals: value,
            ...(typeof value === "string" && { mode: "insensitive" }),
          },
        };
      }),
    });
  }

  const whereConditions: Prisma.JobWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.job.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: {
      [sortField]: sortOrder,
    },
    include: {
      industry: true,
      subIndustry: true,
      recruiter: true,
    },
  });
  const total = await prisma.job.count({ where: whereConditions });
  return {
    meta: { page, limit, total },
    data: result,
  };
};

//===============Get single Job===============
const getSingleJob = async (id: string) => {
  const result = await prisma.job.findUniqueOrThrow({
    where: { id },
    include: {
      industry: true,
      subIndustry: true,
      recruiter: true,
    },
  });

  return result;
};

const updateJob = async (
  id: string,
  payload: UpdateJobPayload,
  viewer: { userId: string; role: UserRole },
) => {
  const job = await prisma.job.findUnique({
    where: { id },
    select: {
      id: true,
      recruiterId: true,
      industryId: true,
      subIndustryId: true,
      recruiter: { select: { userId: true } },
    },
  });
  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  const isAdmin =
    viewer.role === UserRole.ADMIN || viewer.role === UserRole.SUPER_ADMIN;
  const isRecruiter = viewer.role === UserRole.RECRUITER;
  if (!isAdmin && !isRecruiter) {
    throw new ApiError(403, "You are not allowed to update this job");
  }
  if (isRecruiter && job.recruiter.userId !== viewer.userId) {
    throw new ApiError(403, "You can only update jobs you created");
  }

  if (isRecruiter && (payload.featured !== undefined || payload.isVerified !== undefined)) {
    throw new ApiError(
      403,
      "Recruiters are not allowed to update featured/verification flags",
    );
  }

  const nextIndustryId = payload.industryId ?? job.industryId;
  const nextSubIndustryId = payload.subIndustryId ?? job.subIndustryId;
  if (payload.industryId !== undefined || payload.subIndustryId !== undefined) {
    const sub = await prisma.subIndustry.findUnique({
      where: { id: nextSubIndustryId },
      select: { industryId: true },
    });
    if (!sub) {
      throw new ApiError(404, "Sub-industry not found");
    }
    if (sub.industryId !== nextIndustryId) {
      throw new ApiError(
        400,
        "Sub-industry does not belong to the given industry",
      );
    }
  }

  const { deadline, ...rest } = payload;
  const cleanRest = Object.fromEntries(
    Object.entries(rest).filter(([, value]) => value !== undefined),
  ) as Prisma.JobUncheckedUpdateInput;
  const updateData: Prisma.JobUncheckedUpdateInput = {
    ...cleanRest,
    ...(deadline !== undefined
      ? { deadline: deadline ? new Date(deadline) : null }
      : {}),
  };

  return prisma.job.update({
    where: { id },
    data: updateData,
    include: {
      industry: true,
      subIndustry: true,
      recruiter: true,
    },
  });
};

export const jobServices = {
  createJob,
  updateJob,
  getAllJobs,
  getSingleJob,
};
