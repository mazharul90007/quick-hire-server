import { Request, Response } from "express";
import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IndustryService } from "./industry.service";

//===============Create Industry=================
const createIndustry = catchAsync(async (req: Request, res: Response) => {
  const result = await IndustryService.createIndustry(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Industry and default sub-industry created successfully!",
    data: result,
  });
});

//=================Get all Industry=====================
const getAllIndustries = catchAsync(async (req: Request, res: Response) => {
  const result = await IndustryService.getAllIndustries();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Industries fetched successfully!",
    data: result,
  });
});

//=================Update Industry Data==================
const updateIndustry = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await IndustryService.updateIndustry(id as string, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Industry updated successfully!",
    data: result,
  });
});

export const IndustryController = {
  createIndustry,
  getAllIndustries,
  updateIndustry,
};
