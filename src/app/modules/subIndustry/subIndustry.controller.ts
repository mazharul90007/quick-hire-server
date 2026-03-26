import { Request, Response } from "express";
import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { SubIndustryService } from "./subIndustry.service";

const createSubIndustry = catchAsync(async (req: Request, res: Response) => {
  const result = await SubIndustryService.createSubIndustry(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Sub-industry created successfully!",
    data: result,
  });
});

export const SubIndustryController = {
  createSubIndustry,
};
