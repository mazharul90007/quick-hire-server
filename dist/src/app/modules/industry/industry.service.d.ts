import { ICreateIndustry } from "./industry.interface";
export declare const IndustryService: {
    createIndustry: (payload: ICreateIndustry) => Promise<{
        subIndustries: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            industryId: string;
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        logo: string | null;
    }>;
    getAllIndustries: () => Promise<({
        _count: {
            jobs: number;
        };
        subIndustries: {
            name: string;
            id: string;
            _count: {
                jobs: number;
            };
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        logo: string | null;
    })[]>;
    updateIndustry: (id: string, payload: {
        name?: string;
        logo?: string | null;
    }) => Promise<{
        subIndustries: {
            name: string;
            id: string;
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        logo: string | null;
    }>;
};
//# sourceMappingURL=industry.service.d.ts.map