export declare const categoryServices: {
    createCategory: (userId: string, title: string) => Promise<{
        status: import("../../../../generated/prisma/enums").CategoryStatus;
        id: string;
        userId: string;
        title: string;
    }>;
    getAllCategories: () => Promise<{
        status: import("../../../../generated/prisma/enums").CategoryStatus;
        id: string;
        userId: string;
        title: string;
    }[]>;
};
//# sourceMappingURL=category.service.d.ts.map