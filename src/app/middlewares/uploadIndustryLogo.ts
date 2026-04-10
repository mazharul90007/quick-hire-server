import type { Request } from "express";
import multer from "multer";
import status from "http-status";
import ApiError from "../errors/ApiErrors";
import { profileImageMaxBytes } from "../../lib/cloudinary";

const storage = multer.memoryStorage();

const IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

function fileFilter(
  _req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) {
  if (!IMAGE_TYPES.has(file.mimetype)) {
    cb(
      new ApiError(
        status.BAD_REQUEST,
        "Industry logo must be JPEG, PNG, WebP, or GIF",
      ),
    );
    return;
  }
  cb(null, true);
}

/** Optional `logo` file on multipart requests; JSON-only PATCH passes through without a file. */
export const uploadIndustryLogo = multer({
  storage,
  limits: { fileSize: profileImageMaxBytes },
  fileFilter,
}).single("logo");
