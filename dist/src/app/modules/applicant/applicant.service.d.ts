import type { UpdateMyApplicantProfileInput } from "./applicant.validation";
export type ApplicantProfileFileUrls = {
    image?: string;
    cv?: string;
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
} & {
    name: string | null;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    cv: string | null;
    address: string | null;
    phone: string | null;
    userType: import("../../../../generated/prisma/enums").UserType;
}>;
export declare function updateMyProfile(userId: string, data: UpdateMyApplicantProfileInput, files: ApplicantProfileFileUrls): Promise<{
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
} & {
    name: string | null;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    cv: string | null;
    address: string | null;
    phone: string | null;
    userType: import("../../../../generated/prisma/enums").UserType;
}>;
//# sourceMappingURL=applicant.service.d.ts.map