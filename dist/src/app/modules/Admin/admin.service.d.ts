import type { Prisma } from "../../../../generated/prisma/client";
import { Subscription, UserRole, UserStatus, UserType } from "../../../../generated/prisma/enums";
export type AdminSelfFileUrls = {
    image?: string;
};
export declare const adminServices: {
    getAllApplicants: (filters: Record<string, unknown>, options: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: ({
            user: {
                name: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                emailVerified: boolean;
                image: string | null;
                role: UserRole;
                status: UserStatus;
                isDeleted: boolean;
                deletedAt: Date | null;
                address: string | null;
            };
        } & {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            phone: string | null;
            cv: string | null;
            userType: UserType;
            userId: string;
        })[];
    }>;
    getSingleApplicant: (id: string, includeDeleted?: boolean) => Promise<{
        user: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        cv: string | null;
        userType: UserType;
        userId: string;
    }>;
    updateApplicant: (id: string, payload: Prisma.ApplicantUpdateInput & {
        image?: string | null;
    }) => Promise<{
        user: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        cv: string | null;
        userType: UserType;
        userId: string;
    }>;
    getAllRecruiters: (filters: Record<string, unknown>, options: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: ({
            user: {
                name: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                emailVerified: boolean;
                image: string | null;
                role: UserRole;
                status: UserStatus;
                isDeleted: boolean;
                deletedAt: Date | null;
                address: string | null;
            };
            industry: {
                name: string;
                id: string;
            } | null;
            subIndustry: {
                name: string;
                id: string;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            isDeleted: boolean;
            userId: string;
            industryId: string | null;
            subIndustryId: string | null;
            isVerified: boolean;
            recruiterName: string | null;
            recruiterPhone: string | null;
            recruiterWorkEmail: string | null;
            companyName: string | null;
            companyLogo: string | null;
            companyWebsite: string | null;
            companyFacebookId: string | null;
            companyLinkedInId: string | null;
            companySize: import("../../../../generated/prisma/enums").CompanySize | null;
            companyAddress: string | null;
            subscriptionPlan: Subscription;
        })[];
    }>;
    getSingleRecruiter: (id: string, includeDeleted?: boolean) => Promise<{
        user: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            address: string | null;
        };
        industry: {
            name: string;
            id: string;
        } | null;
        subIndustry: {
            name: string;
            id: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isDeleted: boolean;
        userId: string;
        industryId: string | null;
        subIndustryId: string | null;
        isVerified: boolean;
        recruiterName: string | null;
        recruiterPhone: string | null;
        recruiterWorkEmail: string | null;
        companyName: string | null;
        companyLogo: string | null;
        companyWebsite: string | null;
        companyFacebookId: string | null;
        companyLinkedInId: string | null;
        companySize: import("../../../../generated/prisma/enums").CompanySize | null;
        companyAddress: string | null;
        subscriptionPlan: Subscription;
    }>;
    updateRecruiter: (id: string, payload: Prisma.RecruiterUncheckedUpdateInput & {
        image?: string | null;
    }) => Promise<{
        user: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            address: string | null;
        };
        industry: {
            name: string;
            id: string;
        } | null;
        subIndustry: {
            name: string;
            id: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isDeleted: boolean;
        userId: string;
        industryId: string | null;
        subIndustryId: string | null;
        isVerified: boolean;
        recruiterName: string | null;
        recruiterPhone: string | null;
        recruiterWorkEmail: string | null;
        companyName: string | null;
        companyLogo: string | null;
        companyWebsite: string | null;
        companyFacebookId: string | null;
        companyLinkedInId: string | null;
        companySize: import("../../../../generated/prisma/enums").CompanySize | null;
        companyAddress: string | null;
        subscriptionPlan: Subscription;
    }>;
    getAllAdmins: (filters: Record<string, unknown>, options: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: ({
            user: {
                name: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                emailVerified: boolean;
                image: string | null;
                role: UserRole;
                status: UserStatus;
                isDeleted: boolean;
                deletedAt: Date | null;
                address: string | null;
            };
        } & {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            phone: string | null;
            userId: string;
        })[];
    }>;
    getSingleAdmin: (id: string, includeDeleted?: boolean) => Promise<{
        user: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        userId: string;
    }>;
    updateAdminProfile: (id: string, payload: Prisma.AdminUpdateInput & {
        image?: string | null;
    }) => Promise<{
        user: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        userId: string;
    }>;
    getMyProfile: (userId: string) => Promise<{
        user: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        userId: string;
    }>;
    updateMyProfile: (userId: string, data: {
        name?: string;
        address?: string;
        phone?: string;
    }, files: AdminSelfFileUrls) => Promise<{
        user: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        userId: string;
    }>;
    getUserById: (userId: string, includeDeleted?: boolean) => Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        role: UserRole;
        status: UserStatus;
        needPasswordChange: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        address: string | null;
        applicant: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            phone: string | null;
            cv: string | null;
            userType: UserType;
        } | null;
        recruiter: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            isDeleted: boolean;
            industryId: string | null;
            subIndustryId: string | null;
            isVerified: boolean;
            industry: {
                name: string;
                id: string;
            } | null;
            subIndustry: {
                name: string;
                id: string;
            } | null;
            recruiterName: string | null;
            recruiterPhone: string | null;
            recruiterWorkEmail: string | null;
            companyName: string | null;
            companyLogo: string | null;
            companyWebsite: string | null;
            companyFacebookId: string | null;
            companyLinkedInId: string | null;
            companySize: import("../../../../generated/prisma/enums").CompanySize | null;
            companyAddress: string | null;
            subscriptionPlan: Subscription;
        } | null;
        admin: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            address: string | null;
            phone: string | null;
        } | null;
    }>;
    softDeleteUser: (actorUserId: string, actorRole: UserRole, targetUserId: string) => Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        role: UserRole;
        status: UserStatus;
        isDeleted: boolean;
        deletedAt: Date | null;
        address: string | null;
    } | null>;
    updateUserStatus: (actorUserId: string, actorRole: UserRole, targetUserId: string, newStatus: UserStatus) => Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        role: UserRole;
        status: UserStatus;
        isDeleted: boolean;
        deletedAt: Date | null;
        address: string | null;
    } | null>;
};
//# sourceMappingURL=admin.service.d.ts.map