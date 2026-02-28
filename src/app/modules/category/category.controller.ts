import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { categoryServices } from "./category.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";

//===============Create Category===============
const createCategory = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const title = req.body.title as string;

  const result = await categoryServices.createCategory(userId, title);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Category has been Created",
    data: result,
  });
});

//==============Get All Categories==============
const getAllCategories = catchAsync(async (req: Request, res: Response) => {
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
