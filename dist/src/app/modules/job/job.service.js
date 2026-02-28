import { prisma } from "../../../lib/prisma";
import ApiError from "../../errors/ApiErrors";
import calculatePagination from "../../helpers/paginationHelpers";
import { jobSearchableFields } from "./job.constant";
//===============Create Job=================
const createJob = async (userId, payload) => {
    //verify user
    const isExistUser = await prisma.user.findUnique({
        where: { id: userId },
    });
    if (!isExistUser) {
        throw new ApiError(400, "User not found");
    }
    // Handle date format
    const jobData = {
        ...payload,
        userId: userId,
        deadline: payload.deadline ? new Date(payload.deadline) : undefined,
    };
    const result = await prisma.job.create({
        data: jobData,
    });
    return result;
};
//===============Get all Jobs=================
const getAllJobs = async (filters, options) => {
    const { searchTerm, ...filterData } = filters;
    const { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);
    const andConditions = [];
    //search logic
    if (searchTerm) {
        andConditions.push({
            OR: jobSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive",
                },
            })),
        });
    }
    //filter logic
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: filterData[key],
                    // mode: "insensitive",
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma.job.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            category: true,
        },
    });
    const total = await prisma.job.count({ where: whereConditions });
    return {
        meta: { page, limit, total },
        data: result,
    };
};
//===============Get single Job===============
const getSingleJob = async (id) => {
    const result = await prisma.job.findUniqueOrThrow({
        where: { id },
        include: { category: true },
    });
    return result;
};
export const jobServices = {
    createJob,
    getAllJobs,
    getSingleJob,
};
//# sourceMappingURL=job.service.js.map