import { UserRole } from "../../../../generated/prisma/enums";

/** JWT auth on admin routes — ADMIN and SUPER_ADMIN only. */
export const adminStaffRoles = [UserRole.ADMIN, UserRole.SUPER_ADMIN] as const;

/** GET /admin/applicants */
export const applicantListQueryKeys = [
  "searchTerm",
  "userType",
  "includeDeleted",
] as const;

/** GET /admin/recruiters */
export const recruiterListQueryKeys = [
  "searchTerm",
  "isVerified",
  "includeDeleted",
  "subscriptionPlan",
] as const;

/** GET /admin/admins */
export const adminListQueryKeys = ["searchTerm", "includeDeleted"] as const;

export const applicantAllowedSortFields = ["createdAt", "updatedAt"] as const;
export const recruiterAllowedSortFields = [
  "createdAt",
  "updatedAt",
  "companyName",
] as const;
export const adminAllowedSortFields = ["createdAt", "updatedAt"] as const;
