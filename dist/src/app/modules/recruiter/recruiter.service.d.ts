import type { UpdateMyRecruiterProfileInput } from "./recruiter.validation";
export type RecruiterProfileFileUrls = {
    image?: string;
    companyLogo?: string;
};
export declare function getMyProfile(userId: string): Promise<{
    user: {
        name: string | null;
        role: import("../../../../generated/prisma/enums").UserRole;
        status: import("../../../../generated/prisma/enums").UserStatus;
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
    subscriptionPlan: import("../../../../generated/prisma/enums").Subscription;
}>;
export declare function updateMyProfile(userId: string, data: UpdateMyRecruiterProfileInput, files: RecruiterProfileFileUrls): Promise<{
    user: {
        name: string | null;
        role: import("../../../../generated/prisma/enums").UserRole;
        status: import("../../../../generated/prisma/enums").UserStatus;
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
    subscriptionPlan: import("../../../../generated/prisma/enums").Subscription;
}>;
//# sourceMappingURL=recruiter.service.d.ts.map