import calculatePagination from "../../helpers/paginationHelpers";
import { prisma } from "../../../lib/prisma";
import { blogSearchableFields } from "./blog.constants";
import { deleteFromCloudinary } from "../../../lib/cloudinary";
const createBlog = async (data) => {
    const result = await prisma.blog.create({
        data,
    });
    return result;
};
const getAllBlogs = async (filters, options) => {
    const { limit, page, skip } = calculatePagination(options);
    const { searchTerm, ...filterData } = filters;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            OR: blogSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive",
                },
            })),
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => {
                if (key === "isPublished") {
                    return {
                        [key]: filterData[key] === "true",
                    };
                }
                return {
                    [key]: {
                        equals: filterData[key],
                    },
                };
            }),
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma.blog.findMany({
        where: whereConditions,
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? { [options.sortBy]: options.sortOrder }
            : {
                createdAt: "desc",
            },
    });
    const total = await prisma.blog.count({
        where: whereConditions,
    });
    return {
        meta: {
            total,
            page,
            limit,
        },
        data: result,
    };
};
const getBlogById = async (id) => {
    const result = await prisma.blog.findUnique({
        where: {
            id,
        },
    });
    return result;
};
const getBlogBySlug = async (slug) => {
    const result = await prisma.blog.findUnique({
        where: {
            slug,
        },
    });
    return result;
};
const updateBlog = async (id, payload) => {
    const result = await prisma.blog.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
};
const deleteBlog = async (id) => {
    const blog = await prisma.blog.findUnique({
        where: { id },
    });
    if (!blog)
        return null;
    if (blog.imagePublicId) {
        await deleteFromCloudinary(blog.imagePublicId);
    }
    const result = await prisma.blog.delete({
        where: {
            id,
        },
    });
    return result;
};
export const BlogService = {
    createBlog,
    getAllBlogs,
    getBlogById,
    getBlogBySlug,
    updateBlog,
    deleteBlog,
};
//# sourceMappingURL=blog.service.js.map