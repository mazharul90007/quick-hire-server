/** JWT auth on admin routes — ADMIN and SUPER_ADMIN only. */
export declare const adminStaffRoles: readonly ["ADMIN", "SUPER_ADMIN"];
/** GET /admin/applicants */
export declare const applicantListQueryKeys: readonly ["searchTerm", "userType", "includeDeleted"];
/** GET /admin/recruiters */
export declare const recruiterListQueryKeys: readonly ["searchTerm", "isVerified", "includeDeleted", "subscriptionPlan"];
/** GET /admin/admins */
export declare const adminListQueryKeys: readonly ["searchTerm", "includeDeleted"];
export declare const applicantAllowedSortFields: readonly ["createdAt", "updatedAt"];
export declare const recruiterAllowedSortFields: readonly ["createdAt", "updatedAt", "companyName"];
export declare const adminAllowedSortFields: readonly ["createdAt", "updatedAt"];
//# sourceMappingURL=admin.constant.d.ts.map