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
                role: UserRole;
                status: UserStatus;
                isDeleted: boolean;
                deletedAt: Date | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                emailVerified: boolean;
                image: string | null;
                address: string | null;
            };
        } & {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            cv: string | null;
            address: string | null;
            phone: string | null;
            userType: UserType;
        })[];
    }>;
    getSingleApplicant: (id: string, includeDeleted?: boolean) => Promise<{
        user: {
            name: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cv: string | null;
        address: string | null;
        phone: string | null;
        userType: UserType;
    }>;
    updateApplicant: (id: string, payload: Prisma.ApplicantUpdateInput & {
        image?: string | null;
    }) => Promise<{
        user: {
            name: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cv: string | null;
        address: string | null;
        phone: string | null;
        userType: UserType;
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
                role: UserRole;
                status: UserStatus;
                isDeleted: boolean;
                deletedAt: Date | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                emailVerified: boolean;
                image: string | null;
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
            isDeleted: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
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
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
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
        isDeleted: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
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
        isDeleted: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
                role: UserRole;
                status: UserStatus;
                isDeleted: boolean;
                deletedAt: Date | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                emailVerified: boolean;
                image: string | null;
                address: string | null;
            };
        } & {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            address: string | null;
            phone: string | null;
        })[];
    }>;
    getSingleAdmin: (id: string, includeDeleted?: boolean) => Promise<{
        user: {
            name: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        address: string | null;
        phone: string | null;
    }>;
    updateAdminProfile: (id: string, payload: Prisma.AdminUpdateInput & {
        image?: string | null;
    }) => Promise<{
        user: {
            name: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        address: string | null;
        phone: string | null;
    }>;
    getMyProfile: (userId: string) => Promise<{
        user: {
            name: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        address: string | null;
        phone: string | null;
    }>;
    updateMyProfile: (userId: string, data: {
        name?: string;
        address?: string;
        phone?: string;
    }, files: AdminSelfFileUrls) => Promise<{
        user: {
            name: string | null;
            role: UserRole;
            status: UserStatus;
            isDeleted: boolean;
            deletedAt: Date | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            image: string | null;
            address: string | null;
        };
    } & {
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        address: string | null;
        phone: string | null;
    }>;
    getUserById: (userId: string, includeDeleted?: boolean) => Promise<{
        name: string | null;
        role: UserRole;
        status: UserStatus;
        needPasswordChange: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        recruiter: {
            isDeleted: boolean;
            id: string;
            createdAt: Date;
            updatedAt: Date;
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
            industry: {
                name: string;
                id: string;
            } | null;
            subIndustry: {
                name: string;
                id: string;
            } | null;
        } | null;
        applicant: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            cv: string | null;
            address: string | null;
            phone: string | null;
            userType: UserType;
        } | null;
        address: string | null;
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
        role: UserRole;
        status: UserStatus;
        isDeleted: boolean;
        deletedAt: Date | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        address: string | null;
    } | null>;
    updateUserStatus: (actorUserId: string, actorRole: UserRole, targetUserId: string, newStatus: UserStatus) => Promise<{
        name: string | null;
        role: UserRole;
        status: UserStatus;
        isDeleted: boolean;
        deletedAt: Date | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        image: string | null;
        address: string | null;
    } | null>;
};
//# sourceMappingURL=admin.service.d.ts.map