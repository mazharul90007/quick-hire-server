export declare const jobServices: {
    createJob: (userId: string, payload: any) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        companyName: string | null;
        district: string | null;
        categoryId: string;
        jobType: import("../../../../generated/prisma/enums").JobTypes;
        title: string;
        location: string | null;
        companyDetails: string | null;
        vacancy: number | null;
        age: string | null;
        salary: string | null;
        experience: string | null;
        education: string | null;
        additionalReqirements: string[];
        responsibilities: string[];
        requiredSkills: string[];
        description: string | null;
        benefits: string[];
        tags: string[];
        deadline: Date | null;
    }>;
    getAllJobs: (filters: any, options: any) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: ({
            category: {
                status: import("../../../../generated/prisma/enums").CategoryStatus;
                id: string;
                userId: string;
                title: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            companyName: string | null;
            district: string | null;
            categoryId: string;
            jobType: import("../../../../generated/prisma/enums").JobTypes;
            title: string;
            location: string | null;
            companyDetails: string | null;
            vacancy: number | null;
            age: string | null;
            salary: string | null;
            experience: string | null;
            education: string | null;
            additionalReqirements: string[];
            responsibilities: string[];
            requiredSkills: string[];
            description: string | null;
            benefits: string[];
            tags: string[];
            deadline: Date | null;
        })[];
    }>;
    getSingleJob: (id: string) => Promise<{
        category: {
            status: import("../../../../generated/prisma/enums").CategoryStatus;
            id: string;
            userId: string;
            title: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        companyName: string | null;
        district: string | null;
        categoryId: string;
        jobType: import("../../../../generated/prisma/enums").JobTypes;
        title: string;
        location: string | null;
        companyDetails: string | null;
        vacancy: number | null;
        age: string | null;
        salary: string | null;
        experience: string | null;
        education: string | null;
        additionalReqirements: string[];
        responsibilities: string[];
        requiredSkills: string[];
        description: string | null;
        benefits: string[];
        tags: string[];
        deadline: Date | null;
    }>;
};
//# sourceMappingURL=job.service.d.ts.map