import { prisma } from "../../../lib/prisma";
import calculatePagination from "../../helpers/paginationHelpers";
import { applicationSearchableFields } from "./application.constant";
import ApiError from "../../errors/ApiErrors";
import status from "http-status";
//==============Create Application==============
const createApplication = async (userId, payload) => {
    // Check job exists
    const isExistJob = await prisma.job.findUnique({
        where: { id: payload.jobId },
    });
    if (!isExistJob) {
        throw new ApiError(status.NOT_FOUND, "Job not found");
    }
    //if {userId, verify user
    if (userId) {
        const isExistUser = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!isExistUser) {
            throw new ApiError(status.NOT_FOUND, "User does not exist");
        }
    }
    const result = await prisma.application.create({
        data: {
            ...payload,
            userId: userId || null,
        },
    });
    return result;
};
//==============Get All Applications==============
const getAllApplications = async (filters, options) => {
    const { searchTerm, ...filterData } = filters;
    const { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: applicationSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive",
                },
            })),
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: filterData[key],
                },
            })),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma.application.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: {
            [sortBy]: sortOrder,
        },
        include: {
            job: {
                select: {
                    id: true,
                    categoryId: true,
                    title: true,
                    companyName: true,
                    location: true,
                    district: true,
                    vacancy: true,
                    salary: true,
                    jobType: true,
                },
            },
            user: true,
        },
    });
    const total = await prisma.application.count({ where: whereConditions });
    return {
        meta: { page, limit, total },
        data: result,
    };
};
//==============Get Single Application==============
const getSingleApplication = async (id) => {
    const result = await prisma.application.findUniqueOrThrow({
        where: { id },
        include: {
            job: {
                select: {
                    id: true,
                    categoryId: true,
                    title: true,
                    companyName: true,
                    location: true,
                    district: true,
                    vacancy: true,
                    salary: true,
                    jobType: true,
                },
            },
            user: true,
        },
    });
    return result;
};
export const applicationServices = {
    createApplication,
    getAllApplications,
    getSingleApplication,
};
//# sourceMappingURL=application.service.js.map