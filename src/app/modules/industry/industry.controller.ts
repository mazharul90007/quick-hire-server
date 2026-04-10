import { Request, Response } from "express";
import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import ApiError from "../../errors/ApiErrors";
import { uploadProfileImage } from "../../../lib/cloudinary";
import { INDUSTRY_LOGO_FOLDER } from "../../helpers/profileMultipart";
import { IndustryService } from "./industry.service";

//===============Create Industry=================
const createIndustry = catchAsync(async (req: Request, res: Response) => {
  const body = req.body as { name: string };
  const file = req.file;
  if (!file?.buffer?.length) {
    throw new ApiError(
      status.BAD_REQUEST,
      "Industry logo image is required (multipart field: logo)",
    );
  }
  const logoUrl = await uploadProfileImage(file.buffer, INDUSTRY_LOGO_FOLDER);
  const result = await IndustryService.createIndustry({
    name: body.name,
    logo: logoUrl,
  });

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
  const body = req.body as { name?: string };
  const file = req.file;
  if (body.name === undefined && !file?.buffer?.length) {
    throw new ApiError(
      status.BAD_REQUEST,
      "Provide a new name and/or a logo image to update",
    );
  }
  let logoUrl: string | undefined;
  if (file?.buffer?.length) {
    logoUrl = await uploadProfileImage(file.buffer, INDUSTRY_LOGO_FOLDER);
  }
  const result = await IndustryService.updateIndustry(id as string, {
    ...(body.name !== undefined ? { name: body.name } : {}),
    ...(logoUrl !== undefined ? { logo: logoUrl } : {}),
  });
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
