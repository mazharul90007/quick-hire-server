import { ICreateApplicant, ICreateRecruiter } from "./auth.interface";
import { UserRole } from "../../../../generated/prisma/enums";
export declare const AuthService: {
    createApplicant: (payload: ICreateApplicant) => Promise<{
        user: {
            name: string | null;
            role: UserRole;
            status: import("../../../../generated/prisma/enums").UserStatus;
            needPasswordChange: boolean;
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
    createAdmin: (payload: any) => Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        address: string | null;
        phone: string | null;
    }>;
    forgetPassword: (payload: {
        email: string;
    }) => Promise<any>;
    resetPassword: (payload: any) => Promise<{
        status: boolean;
    }>;
    createRecruiter: (payload: ICreateRecruiter) => Promise<{
        user: {
            name: string | null;
            role: UserRole;
            status: import("../../../../generated/prisma/enums").UserStatus;
            needPasswordChange: boolean;
            email: string;
            emailVerified: boolean;
            image: string | null;
            address: string | null;
        };
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
};
//# sourceMappingURL=auth.service.d.ts.map