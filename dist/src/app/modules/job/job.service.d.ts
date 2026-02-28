export declare const jobServices: {
    createJob: (userId: string, payload: any) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        title: string;
        companyName: string | null;
        companyDetails: string | null;
        location: string | null;
        district: string | null;
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
        jobType: import("../../../../generated/prisma/enums").JobTypes;
        tags: string[];
        deadline: Date | null;
        categoryId: string;
    }>;
};
//# sourceMappingURL=job.service.d.ts.map