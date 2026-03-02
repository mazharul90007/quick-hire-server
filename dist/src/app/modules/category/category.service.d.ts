export declare const categoryServices: {
    createCategory: (userId: string, title: string) => Promise<{
        status: import("../../../../generated/prisma/enums").CategoryStatus;
        id: string;
        userId: string;
        title: string;
    }>;
    getAllCategories: () => Promise<({
        jobs: {
            id: string;
            companyName: string | null;
            location: string | null;
            district: string | null;
            jobType: import("../../../../generated/prisma/enums").JobTypes;
            title: string;
            salary: string | null;
        }[];
    } & {
        status: import("../../../../generated/prisma/enums").CategoryStatus;
        id: string;
        userId: string;
        title: string;
    })[]>;
};
//# sourceMappingURL=category.service.d.ts.map