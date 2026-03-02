export declare const applicationServices: {
    createApplication: (userId: string | undefined, payload: any) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        userId: string | null;
        resume_link: string;
        cover_note: string | null;
        expectedSalary: string | null;
        jobId: string;
    }>;
    getAllApplications: (filters: any, options: any) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: ({
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
                phone: string | null;
            } | null;
            job: {
                id: string;
                companyName: string | null;
                location: string | null;
                district: string | null;
                categoryId: string;
                jobType: import("../../../../generated/prisma/enums").JobTypes;
                title: string;
                vacancy: number | null;
                salary: string | null;
            };
        } & {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            userId: string | null;
            resume_link: string;
            cover_note: string | null;
            expectedSalary: string | null;
            jobId: string;
        })[];
    }>;
    getSingleApplication: (id: string) => Promise<{
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
            phone: string | null;
        } | null;
        job: {
            id: string;
            companyName: string | null;
            location: string | null;
            district: string | null;
            categoryId: string;
            jobType: import("../../../../generated/prisma/enums").JobTypes;
            title: string;
            vacancy: number | null;
            salary: string | null;
        };
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        userId: string | null;
        resume_link: string;
        cover_note: string | null;
        expectedSalary: string | null;
        jobId: string;
    }>;
};
//# sourceMappingURL=application.service.d.ts.map