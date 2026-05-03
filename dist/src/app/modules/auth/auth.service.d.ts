import { ICreateApplicant, ICreateRecruiter } from "./auth.interface";
import { UserRole } from "../../../../generated/prisma/enums";
export declare const AuthService: {
    createApplicant: (payload: ICreateApplicant) => Promise<{
        user: {
            name: string | null;
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: UserRole;
            status: import("../../../../generated/prisma/enums").UserStatus;
            needPasswordChange: boolean;
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
        userType: import("../../../../generated/prisma/enums").UserType;
        userId: string;
    }>;
    createAdmin: (payload: any) => Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        phone: string | null;
        userId: string;
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
            email: string;
            emailVerified: boolean;
            image: string | null;
            role: UserRole;
            status: import("../../../../generated/prisma/enums").UserStatus;
            needPasswordChange: boolean;
            address: string | null;
        };
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
        subscriptionPlan: import("../../../../generated/prisma/enums").Subscription;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map