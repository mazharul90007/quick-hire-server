import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import {
  uploadApplicantCvPdf,
  uploadProfileImage,
} from "../../../lib/cloudinary";
import {
  PROFILE_IMAGE_FOLDER,
  assertPdfMagic,
  profileMultipartFiles,
} from "../../helpers/profileMultipart";
import * as applicantServices from "./applicant.service";
import type { UpdateMyApplicantProfileInput } from "./applicant.validation";

//==========Get Applicant Profile=========
const getMyProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await applicantServices.getMyProfile(req.user!.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Profile fetched successfully",
    data: result,
  });
});

//==========Update Applicant Profile=========
const updateMyProfile = catchAsync(async (req: Request, res: Response) => {
  const body = req.body as UpdateMyApplicantProfileInput;
  const f = profileMultipartFiles(req);
  const urls: applicantServices.ApplicantProfileFileUrls = {};
  if (f.image?.buffer?.length) {
    urls.image = await uploadProfileImage(f.image.buffer, PROFILE_IMAGE_FOLDER);
  }
  if (f.cv?.buffer?.length) {
    assertPdfMagic(f.cv);
    urls.cv = await uploadApplicantCvPdf(f.cv.buffer);
  }
  const result = await applicantServices.updateMyProfile(
    req.user!.id,
    body,
    urls,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Profile updated",
    data: result,
  });
});

export const applicantController = { getMyProfile, updateMyProfile };
