import { UserRole } from "../../../../generated/prisma/enums";
/** JWT auth on admin routes — ADMIN and SUPER_ADMIN only. */
export const adminStaffRoles = [UserRole.ADMIN, UserRole.SUPER_ADMIN];
/** GET /admin/applicants */
export const applicantListQueryKeys = [
    "searchTerm",
    "userType",
    "includeDeleted",
];
/** GET /admin/recruiters */
export const recruiterListQueryKeys = [
    "searchTerm",
    "isVerified",
    "includeDeleted",
    "subscriptionPlan",
];
/** GET /admin/admins */
export const adminListQueryKeys = ["searchTerm", "includeDeleted"];
export const applicantAllowedSortFields = ["createdAt", "updatedAt"];
export const recruiterAllowedSortFields = [
    "createdAt",
    "updatedAt",
    "companyName",
];
export const adminAllowedSortFields = ["createdAt", "updatedAt"];
//# sourceMappingURL=admin.constant.js.map