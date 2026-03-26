import { Request, Response } from "express";
import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IndustryService } from "./industry.service";

const createIndustry = catchAsync(async (req: Request, res: Response) => {
  const result = await IndustryService.createIndustry(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Industry and default sub-industry created successfully!",
    data: result,
  });
});

export const IndustryController = {
  createIndustry,
};
