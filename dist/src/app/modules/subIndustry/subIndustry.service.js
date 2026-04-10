import { prisma } from "../../../lib/prisma";
//==================Create subIndustries===================
const createSubIndustry = async (payload) => {
    return await prisma.subIndustry.create({
        data: payload,
    });
};
//==================Get all subIndustries===================
const getAllSubIndustries = async () => {
    return await prisma.subIndustry.findMany({
        include: {
            industry: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });
};
//==================Update subIndustry===================
const updateSubIndustry = async (id, payload) => {
    return await prisma.subIndustry.update({
        where: { id },
        data: payload,
        include: {
            industry: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });
};
export const SubIndustryService = {
    createSubIndustry,
    getAllSubIndustries,
    updateSubIndustry,
};
//# sourceMappingURL=subIndustry.service.js.map