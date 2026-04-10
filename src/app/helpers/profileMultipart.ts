import type { Request } from "express";
import status from "http-status";
import ApiError from "../errors/ApiErrors";

export const PROFILE_IMAGE_FOLDER = "quickhire/profile-images";
export const COMPANY_LOGO_FOLDER = "quickhire/company-logos";
export const INDUSTRY_LOGO_FOLDER = "quickhire/industry-logos";

export function profileMultipartFiles(req: Request) {
  const m = req.files as Record<string, Express.Multer.File[]> | undefined;
  return {
    image: m?.image?.[0],
    companyLogo: m?.companyLogo?.[0],
    cv: m?.cv?.[0],
  };
}

export function assertPdfMagic(file: Express.Multer.File) {
  const magic = file.buffer.subarray(0, 4).toString("utf8");
  if (!magic.startsWith("%PDF")) {
    throw new ApiError(
      status.BAD_REQUEST,
      "File does not appear to be a valid PDF",
    );
  }
}
