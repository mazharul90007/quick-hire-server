import type { Prisma } from "../../../../generated/prisma/client";
import {
  Subscription,
  UserRole,
  UserStatus,
  UserType,
} from "../../../../generated/prisma/enums";
import { prisma } from "../../../lib/prisma";

import ApiError from "../../errors/ApiErrors";
import calculatePagination from "../../helpers/paginationHelpers";
import {
  adminAllowedSortFields,
  applicantAllowedSortFields,
  recruiterAllowedSortFields,
} from "./admin.constant";
const userPublicSelect = {
  id: true,
  email: true,
  name: true,
  image: true,
  role: true,
  status: true,
  emailVerified: true,
  address: true,
  isDeleted: true,
  deletedAt: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.UserSelect;

function parseBool(v: unknown): boolean {
  return v === true || v === "true";
}

function pickSort(
  sortBy: string,
  allowed: readonly string[],
  fallback: string,
): string {
  return allowed.includes(sortBy) ? sortBy : fallback;
}

async function ensureProfileForRole(
  tx: Prisma.TransactionClient,
  userId: string,
  role: UserRole,
) {
  if (role === UserRole.RECRUITER) {
    await tx.recruiter.upsert({
      where: { userId },
      create: { userId },
      update: {},
    });
  }
  if (role === UserRole.APPLICANT) {
    await tx.applicant.upsert({
      where: { userId },
      create: { userId },
      update: {},
    });
  }
  if (role === UserRole.ADMIN || role === UserRole.SUPER_ADMIN) {
    await tx.admin.upsert({
      where: { userId },
      create: { userId },
      update: {},
    });
  }
}

// ---------------------------------------------------------------------------
// APPLICANTS
// ---------------------------------------------------------------------------

const getAllApplicants = async (
  filters: Record<string, unknown>,
  options: Record<string, unknown>,
) => {
  const { searchTerm, userType, includeDeleted, ...rest } = filters;
  void rest;
  const includeDel = parseBool(includeDeleted);

  let { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);
  sortOrder = String(sortOrder).toLowerCase() === "asc" ? "asc" : "desc";
  const sortField = pickSort(
    String(sortBy),
    applicantAllowedSortFields as unknown as string[],
    "createdAt",
  );

  const userWhere: Prisma.UserWhereInput = {};
  if (!includeDel) {
    userWhere.isDeleted = false;
  }

  const where: Prisma.ApplicantWhereInput = {
    user: userWhere,
  };

  if (searchTerm && typeof searchTerm === "string" && searchTerm.trim()) {
    const q = searchTerm.trim();
    where.OR = [
      { name: { contains: q, mode: "insensitive" } },
      { user: { email: { contains: q, mode: "insensitive" } } },
      { user: { name: { contains: q, mode: "insensitive" } } },
    ];
  }

  if (
    userType &&
    typeof userType === "string" &&
    (Object.values(UserType) as string[]).includes(userType)
  ) {
    where.userType = userType as UserType;
  }

  const [data, total] = await Promise.all([
    prisma.applicant.findMany({
      where,
      skip,
      take: limit,
      orderBy: { [sortField]: sortOrder },
      include: { user: { select: userPublicSelect } },
    }),
    prisma.applicant.count({ where }),
  ]);

  return {
    meta: { page, limit, total },
    data,
  };
};

const getSingleApplicant = async (id: string, includeDeleted = false) => {
  const row = await prisma.applicant.findUnique({
    where: { id },
    include: { user: { select: userPublicSelect } },
  });
  if (!row) {
    throw new ApiError(404, "Applicant not found");
  }
  if (!includeDeleted && row.user?.isDeleted) {
    throw new ApiError(404, "Applicant not found");
  }
  return row;
};

const updateApplicant = async (
  id: string,
  payload: Prisma.ApplicantUpdateInput,
) => {
  await getSingleApplicant(id, false);
  return prisma.applicant.update({
    where: { id },
    data: payload,
    include: { user: { select: userPublicSelect } },
  });
};

// ---------------------------------------------------------------------------
// RECRUITERS
// ---------------------------------------------------------------------------

const getAllRecruiters = async (
  filters: Record<string, unknown>,
  options: Record<string, unknown>,
) => {
  const { searchTerm, isVerified, includeDeleted, subscriptionPlan, ...rest } =
    filters;
  void rest;
  const includeDel = parseBool(includeDeleted);

  let { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);
  sortOrder = String(sortOrder).toLowerCase() === "asc" ? "asc" : "desc";
  const sortField = pickSort(
    String(sortBy),
    recruiterAllowedSortFields as unknown as string[],
    "createdAt",
  );

  const userWhere: Prisma.UserWhereInput = {};
  if (!includeDel) {
    userWhere.isDeleted = false;
  }

  const where: Prisma.RecruiterWhereInput = {
    user: userWhere,
  };

  if (!includeDel) {
    where.isDeleted = false;
  }

  if (searchTerm && typeof searchTerm === "string" && searchTerm.trim()) {
    const q = searchTerm.trim();
    where.OR = [
      { companyName: { contains: q, mode: "insensitive" } },
      { recruiterName: { contains: q, mode: "insensitive" } },
      { user: { email: { contains: q, mode: "insensitive" } } },
      { user: { name: { contains: q, mode: "insensitive" } } },
    ];
  }

  if (isVerified !== undefined && isVerified !== "") {
    where.isVerified = parseBool(isVerified);
  }

  if (
    subscriptionPlan &&
    typeof subscriptionPlan === "string" &&
    (Object.values(Subscription) as string[]).includes(subscriptionPlan)
  ) {
    where.subscriptionPlan = subscriptionPlan as Subscription;
  }

  const [data, total] = await Promise.all([
    prisma.recruiter.findMany({
      where,
      skip,
      take: limit,
      orderBy: { [sortField]: sortOrder },
      include: {
        user: { select: userPublicSelect },
        industry: { select: { id: true, name: true } },
        subIndustry: { select: { id: true, name: true } },
      },
    }),
    prisma.recruiter.count({ where }),
  ]);

  return {
    meta: { page, limit, total },
    data,
  };
};

const getSingleRecruiter = async (id: string, includeDeleted = false) => {
  const row = await prisma.recruiter.findUnique({
    where: { id },
    include: {
      user: { select: userPublicSelect },
      industry: { select: { id: true, name: true } },
      subIndustry: { select: { id: true, name: true } },
    },
  });
  if (!row) {
    throw new ApiError(404, "Recruiter not found");
  }
  if (!includeDeleted && (row.user?.isDeleted || row.isDeleted)) {
    throw new ApiError(404, "Recruiter not found");
  }
  return row;
};

const updateRecruiter = async (
  id: string,
  payload: Prisma.RecruiterUncheckedUpdateInput,
) => {
  await getSingleRecruiter(id, false);

  if (payload.industryId || payload.subIndustryId) {
    const industryId = payload.industryId as string | null | undefined;
    const subIndustryId = payload.subIndustryId as string | null | undefined;
    if (subIndustryId && industryId) {
      const sub = await prisma.subIndustry.findUnique({
        where: { id: subIndustryId },
        select: { industryId: true },
      });
      if (!sub) {
        throw new ApiError(404, "Sub-industry not found");
      }
      if (sub.industryId !== industryId) {
        throw new ApiError(
          400,
          "Sub-industry does not belong to the given industry",
        );
      }
    }
  }

  return prisma.recruiter.update({
    where: { id },
    data: payload,
    include: {
      user: { select: userPublicSelect },
      industry: { select: { id: true, name: true } },
      subIndustry: { select: { id: true, name: true } },
    },
  });
};

// ---------------------------------------------------------------------------
// ADMINS (Admin profile + user with staff role)
// ---------------------------------------------------------------------------

const getAllAdmins = async (
  filters: Record<string, unknown>,
  options: Record<string, unknown>,
) => {
  const { searchTerm, includeDeleted, ...rest } = filters;
  void rest;
  const includeDel = parseBool(includeDeleted);

  let { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);
  sortOrder = String(sortOrder).toLowerCase() === "asc" ? "asc" : "desc";
  const sortField = pickSort(
    String(sortBy),
    adminAllowedSortFields as unknown as string[],
    "createdAt",
  );

  const userWhere: Prisma.UserWhereInput = {
    role: { in: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
  };
  if (!includeDel) {
    userWhere.isDeleted = false;
  }

  const where: Prisma.AdminWhereInput = {
    user: userWhere,
  };

  if (searchTerm && typeof searchTerm === "string" && searchTerm.trim()) {
    const q = searchTerm.trim();
    where.OR = [
      { name: { contains: q, mode: "insensitive" } },
      { user: { email: { contains: q, mode: "insensitive" } } },
      { user: { name: { contains: q, mode: "insensitive" } } },
    ];
  }

  const [data, total] = await Promise.all([
    prisma.admin.findMany({
      where,
      skip,
      take: limit,
      orderBy: { [sortField]: sortOrder },
      include: { user: { select: userPublicSelect } },
    }),
    prisma.admin.count({ where }),
  ]);

  return {
    meta: { page, limit, total },
    data,
  };
};

const getSingleAdmin = async (id: string, includeDeleted = false) => {
  const row = await prisma.admin.findUnique({
    where: { id },
    include: { user: { select: userPublicSelect } },
  });
  if (!row) {
    throw new ApiError(404, "Admin profile not found");
  }
  if (
    row.user &&
    row.user.role !== UserRole.ADMIN &&
    row.user.role !== UserRole.SUPER_ADMIN
  ) {
    throw new ApiError(404, "Admin profile not found");
  }
  if (!includeDeleted && row.user?.isDeleted) {
    throw new ApiError(404, "Admin profile not found");
  }
  return row;
};

const updateAdminProfile = async (
  id: string,
  payload: Prisma.AdminUpdateInput,
) => {
  await getSingleAdmin(id, false);
  return prisma.admin.update({
    where: { id },
    data: payload,
    include: { user: { select: userPublicSelect } },
  });
};

// ---------------------------------------------------------------------------
// USER (soft delete + role + status)
// ---------------------------------------------------------------------------

const softDeleteUser = async (
  actorUserId: string,
  actorRole: UserRole,
  targetUserId: string,
) => {
  if (actorUserId === targetUserId) {
    throw new ApiError(400, "You cannot delete your own account");
  }

  const target = await prisma.user.findUnique({ where: { id: targetUserId } });
  if (!target) {
    throw new ApiError(404, "User not found");
  }
  if (target.isDeleted) {
    throw new ApiError(400, "User is already deleted");
  }
  if (
    target.role === UserRole.SUPER_ADMIN &&
    actorRole !== UserRole.SUPER_ADMIN
  ) {
    throw new ApiError(403, "Only super admin can delete a super admin user");
  }

  await prisma.$transaction(async (tx) => {
    await tx.session.deleteMany({ where: { userId: targetUserId } });
    await tx.user.update({
      where: { id: targetUserId },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
        status: UserStatus.DELETED,
      },
    });
    await tx.recruiter.updateMany({
      where: { userId: targetUserId },
      data: { isDeleted: true },
    });
  });

  return prisma.user.findUnique({
    where: { id: targetUserId },
    select: userPublicSelect,
  });
};

const updateUserRole = async (
  actorUserId: string,
  actorRole: UserRole,
  targetUserId: string,
  newRole: UserRole,
) => {
  const target = await prisma.user.findUnique({ where: { id: targetUserId } });
  if (!target) {
    throw new ApiError(404, "User not found");
  }
  if (target.isDeleted) {
    throw new ApiError(400, "Cannot change role of a deleted user");
  }

  if (newRole === UserRole.SUPER_ADMIN && actorRole !== UserRole.SUPER_ADMIN) {
    throw new ApiError(403, "Only super admin can assign SUPER_ADMIN role");
  }
  if (
    target.role === UserRole.SUPER_ADMIN &&
    actorRole !== UserRole.SUPER_ADMIN
  ) {
    throw new ApiError(403, "Only super admin can modify super admin users");
  }

  if (actorUserId === targetUserId) {
    const isStaff = (r: UserRole) =>
      r === UserRole.ADMIN || r === UserRole.SUPER_ADMIN;
    if (isStaff(target.role) && !isStaff(newRole)) {
      throw new ApiError(400, "You cannot remove your own staff access");
    }
  }

  await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: targetUserId },
      data: { role: newRole },
    });
    await ensureProfileForRole(tx, targetUserId, newRole);
  });

  return prisma.user.findUnique({
    where: { id: targetUserId },
    select: userPublicSelect,
  });
};

const updateUserStatus = async (
  actorUserId: string,
  actorRole: UserRole,
  targetUserId: string,
  newStatus: UserStatus,
) => {
  if (actorUserId === targetUserId) {
    throw new ApiError(400, "Use another admin to change your own status");
  }

  const target = await prisma.user.findUnique({ where: { id: targetUserId } });
  if (!target) {
    throw new ApiError(404, "User not found");
  }
  if (target.isDeleted) {
    throw new ApiError(400, "User is deleted");
  }
  if (
    target.role === UserRole.SUPER_ADMIN &&
    actorRole !== UserRole.SUPER_ADMIN
  ) {
    throw new ApiError(403, "Only super admin can modify super admin users");
  }

  await prisma.user.update({
    where: { id: targetUserId },
    data: { status: newStatus },
  });

  return prisma.user.findUnique({
    where: { id: targetUserId },
    select: userPublicSelect,
  });
};

export const adminServices = {
  getAllApplicants,
  getSingleApplicant,
  updateApplicant,
  getAllRecruiters,
  getSingleRecruiter,
  updateRecruiter,
  getAllAdmins,
  getSingleAdmin,
  updateAdminProfile,
  softDeleteUser,
  updateUserRole,
  updateUserStatus,
};
