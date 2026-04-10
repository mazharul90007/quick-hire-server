import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { UserRole } from "../../../../generated/prisma/enums";
import { applicationServices } from "./application.service";
import pick from "../../../shared/pick";
import { applicationFilterableFields } from "./application.constant";
import ApiError from "../../errors/ApiErrors";
import { uploadApplicationCvPdf } from "../../../lib/cloudinary";
import type { CreateApplicationFormPayload } from "./application.validation";

//==========Create Application=========
const createApplication = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const file = req.file;

  if (!file?.buffer?.length) {
    throw new ApiError(
      status.BAD_REQUEST,
      'CV PDF is required (form field name: "cv")',
    );
  }
  if (file.mimetype !== "application/pdf") {
    throw new ApiError(status.BAD_REQUEST, "CV must be a PDF file");
  }
  const magic = file.buffer.subarray(0, 4).toString("utf8");
  if (!magic.startsWith("%PDF")) {
    throw new ApiError(
      status.BAD_REQUEST,
      "File does not appear to be a valid PDF",
    );
  }

  const cvUrl = await uploadApplicationCvPdf(file.buffer);
  const body = req.body as CreateApplicationFormPayload;

  const result = await applicationServices.createApplication(userId, {
    ...body,
    cv: cvUrl,
  });

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Application submitted successfully",
    data: result,
  });
});

//==========Get All Applications=========
const getAllApplications = catchAsync(async (req: Request, res: Response) => {
  // Only whitelisted query keys become filters (see application.constant).
  const filters = pick(req.query, applicationFilterableFields);
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);

  const result = await applicationServices.getAllApplications(
    filters,
    options,
    {
      userId: req.user!.id,
      role: req.user!.role as UserRole,
    },
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Applications fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

//==========Get Single Application=========
const getSingleApplication = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await applicationServices.getSingleApplication(id, {
    userId: req.user!.id,
    role: req.user!.role as UserRole,
  });

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Application data fetched successfully",
    data: result,
  });
});

export const applicationController = {
  createApplication,
  getAllApplications,
  getSingleApplication,
};
