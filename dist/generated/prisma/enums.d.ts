export declare const UserType: {
    readonly NORMAL: "NORMAL";
    readonly SILVER: "SILVER";
    readonly GOLD: "GOLD";
    readonly DIAMOND: "DIAMOND";
};
export type UserType = (typeof UserType)[keyof typeof UserType];
export declare const UserRole: {
    readonly APPLICANT: "APPLICANT";
    readonly RECRUITER: "RECRUITER";
    readonly ADMIN: "ADMIN";
    readonly SUPER_ADMIN: "SUPER_ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly BLOCKED: "BLOCKED";
    readonly DELETED: "DELETED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const CoursePurchaseStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly FAILED: "FAILED";
    readonly REFUNDED: "REFUNDED";
    readonly CANCELED: "CANCELED";
};
export type CoursePurchaseStatus = (typeof CoursePurchaseStatus)[keyof typeof CoursePurchaseStatus];
export declare const CourseAccessDuration: {
    readonly MONTHS_6: "MONTHS_6";
    readonly MONTHS_12: "MONTHS_12";
    readonly UNLIMITED: "UNLIMITED";
};
export type CourseAccessDuration = (typeof CourseAccessDuration)[keyof typeof CourseAccessDuration];
export declare const JobTypes: {
    readonly REMOTE: "REMOTE";
    readonly ONSITE: "ONSITE";
    readonly HYBRID: "HYBRID";
};
export type JobTypes = (typeof JobTypes)[keyof typeof JobTypes];
export declare const EmploymentType: {
    readonly FULL_TIME: "FULL_TIME";
    readonly PART_TIME: "PART_TIME";
    readonly CONTRACTUAL: "CONTRACTUAL";
    readonly INTERNSHIP: "INTERNSHIP";
    readonly FREELANCE: "FREELANCE";
};
export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType];
export declare const JobStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly PAUSED: "PAUSED";
    readonly DELETED: "DELETED";
};
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];
export declare const CompanySize: {
    readonly SMALL: "SMALL";
    readonly MEDIUM: "MEDIUM";
    readonly LARGE: "LARGE";
    readonly VERY_LARGE: "VERY_LARGE";
    readonly ENTERPRISE: "ENTERPRISE";
};
export type CompanySize = (typeof CompanySize)[keyof typeof CompanySize];
export declare const Subscription: {
    readonly FREE: "FREE";
    readonly SILVER: "SILVER";
    readonly GOLD: "GOLD";
    readonly DIAMOND: "DIAMOND";
};
export type Subscription = (typeof Subscription)[keyof typeof Subscription];
//# sourceMappingURL=enums.d.ts.map