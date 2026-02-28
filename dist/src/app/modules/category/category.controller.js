import catchAsync from "../../../shared/catchAsync";
import { categoryServices } from "./category.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
//===============Create Category===============
const createCategory = catchAsync(async (req, res) => {
    const userId = req.user?.id;
    const title = req.body.title;
    const result = await categoryServices.createCategory(userId, title);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Category has been Created",
        data: result,
    });
});
//==============Get All Categories==============
const getAllCategories = catchAsync(async (req, res) => {
    const result = await categoryServices.getAllCategories();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "All categories data fetched",
        data: result,
    });
});
export const categoryController = {
    createCategory,
    getAllCategories,
};
//# sourceMappingURL=category.controller.js.map