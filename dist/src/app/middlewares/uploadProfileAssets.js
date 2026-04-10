import multer from "multer";
import status from "http-status";
import ApiError from "../errors/ApiErrors";
import { profileImageMaxBytes } from "../../lib/cloudinary";
const PDF_MAX = 5 * 1024 * 1024;
const storage = multer.memoryStorage();
const IMAGE_TYPES = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
]);
function fileFilter(_req, file, cb) {
    if (file.fieldname === "cv") {
        if (file.mimetype !== "application/pdf") {
            cb(new ApiError(status.BAD_REQUEST, "CV must be a PDF (application/pdf)"));
            return;
        }
        cb(null, true);
        return;
    }
    if (!IMAGE_TYPES.has(file.mimetype)) {
        cb(new ApiError(status.BAD_REQUEST, "Images must be JPEG, PNG, WebP, or GIF"));
        return;
    }
    cb(null, true);
}
/** Optional multipart: `data` (JSON) + `image` (User.image avatar) + company logo / CV where applicable. */
export const uploadProfileAssets = multer({
    storage,
    limits: {
        fileSize: Math.max(profileImageMaxBytes, PDF_MAX),
    },
    fileFilter,
}).fields([
    { name: "image", maxCount: 1 },
    { name: "companyLogo", maxCount: 1 },
    { name: "cv", maxCount: 1 },
]);
//# sourceMappingURL=uploadProfileAssets.js.map