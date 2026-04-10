import type { Request } from "express";
import multer from "multer";
import status from "http-status";
import ApiError from "../errors/ApiErrors";

const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

const storage = multer.memoryStorage();

function fileFilter(
  _req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) {
  if (file.mimetype !== "application/pdf") {
    cb(
      new ApiError(
        status.BAD_REQUEST,
        "CV must be a PDF file (application/pdf)",
      ),
    );
    return;
  }
  cb(null, true);
}

export const uploadApplicationCv = multer({
  storage,
  limits: { fileSize: MAX_BYTES },
  fileFilter,
});
