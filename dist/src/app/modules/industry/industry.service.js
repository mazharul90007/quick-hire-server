import { prisma } from "../../../lib/prisma";
//===============Create Industry=================
const createIndustry = async (payload) => {
    return await prisma.$transaction(async (tx) => {
        const result = await tx.industry.create({
            data: {
                name: payload.name,
                logo: payload.logo ?? null,
                subIndustries: {
                    create: {
                        name: "Others",
                    },
                },
            },
            include: {
                subIndustries: true,
            },
        });
        return result;
    });
};
//=================Get all Industry======================
const getAllIndustries = async () => {
    return await prisma.industry.findMany({
        include: {
            _count: {
                select: { jobs: true },
            },
            subIndustries: {
                select: {
                    id: true,
                    name: true,
                    _count: {
                        select: { jobs: true },
                    },
                },
            },
        },
    });
};
//=================Update Industry Data==================
const updateIndustry = async (id, payload) => {
    return await prisma.industry.update({
        where: { id },
        data: {
            ...(payload.name !== undefined && { name: payload.name }),
            ...(payload.logo !== undefined && { logo: payload.logo }),
        },
        include: {
            subIndustries: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });
};
export const IndustryService = {
    createIndustry,
    getAllIndustries,
    updateIndustry,
};
//# sourceMappingURL=industry.service.js.map