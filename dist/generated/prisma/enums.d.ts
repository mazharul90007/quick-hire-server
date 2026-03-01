export declare const UserRole: {
    readonly APPLICANT: "APPLICANT";
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
export declare const CategoryStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly BLOCKED: "BLOCKED";
};
export type CategoryStatus = (typeof CategoryStatus)[keyof typeof CategoryStatus];
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
//# sourceMappingURL=enums.d.ts.map