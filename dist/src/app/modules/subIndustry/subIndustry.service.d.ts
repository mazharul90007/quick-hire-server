import { ICreateSubIndustry } from "./subIndustry.interface";
export declare const SubIndustryService: {
    createSubIndustry: (payload: ICreateSubIndustry) => Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        industryId: string;
    }>;
    getAllSubIndustries: () => Promise<({
        industry: {
            name: string;
            id: string;
        };
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        industryId: string;
    })[]>;
    updateSubIndustry: (id: string, payload: any) => Promise<{
        industry: {
            name: string;
            id: string;
        };
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        industryId: string;
    }>;
};
//# sourceMappingURL=subIndustry.service.d.ts.map