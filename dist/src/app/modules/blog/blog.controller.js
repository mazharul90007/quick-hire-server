import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { blogFilterableFields, BLOG_IMAGE_FOLDER } from "./blog.constants";
import { BlogService } from "./blog.service";
import { uploadImage, deleteFromCloudinary } from "../../../lib/cloudinary";
import ApiError from "../../errors/ApiErrors";
const createBlog = catchAsync(async (req, res) => {
    const { ...blogData } = req.body;
    const file = req.file;
    if (file) {
        const uploadResult = await uploadImage(file.buffer, BLOG_IMAGE_FOLDER);
        blogData.image = uploadResult.url;
        blogData.imagePublicId = uploadResult.publicId;
    }
    const result = await BlogService.createBlog(blogData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog created successfully",
        data: result,
    });
});
const getAllBlogs = catchAsync(async (req, res) => {
    const filters = pick(req.query, blogFilterableFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await BlogService.getAllBlogs(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blogs fetched successfully",
        meta: result.meta,
        data: result.data,
    });
});
const getBlogById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogService.getBlogById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog fetched successfully",
        data: result,
    });
});
const getBlogBySlug = catchAsync(async (req, res) => {
    const { slug } = req.params;
    const result = await BlogService.getBlogBySlug(slug);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog fetched successfully",
        data: result,
    });
});
const updateBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { ...updateData } = req.body;
    const file = req.file;
    // Get current blog to handle old image deletion
    const currentBlog = await BlogService.getBlogById(id);
    if (!currentBlog) {
        throw new ApiError(httpStatus.NOT_FOUND, "Blog not found");
    }
    if (file) {
        // Delete old image if exists
        if (currentBlog.imagePublicId) {
            await deleteFromCloudinary(currentBlog.imagePublicId);
        }
        // Upload new image
        const uploadResult = await uploadImage(file.buffer, BLOG_IMAGE_FOLDER);
        updateData.image = uploadResult.url;
        updateData.imagePublicId = uploadResult.publicId;
    }
    const result = await BlogService.updateBlog(id, updateData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog updated successfully",
        data: result,
    });
});
const deleteBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BlogService.deleteBlog(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog deleted successfully",
        data: result,
    });
});
export const BlogController = {
    createBlog,
    getAllBlogs,
    getBlogById,
    getBlogBySlug,
    updateBlog,
    deleteBlog,
};
//# sourceMappingURL=blog.controller.js.map