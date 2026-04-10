import { v2 as cloudinary } from "cloudinary";
import config from "../app/config";
let configured = false;
function ensureConfig() {
    if (configured)
        return;
    const { cloud_name, api_key, api_secret } = config;
    if (!cloud_name || !api_key || !api_secret) {
        throw new Error("Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in .env");
    }
    cloudinary.config({ cloud_name, api_key, api_secret, secure: true });
    configured = true;
}
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
function uploadRawPdf(buffer, folder) {
    ensureConfig();
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({
            folder,
            resource_type: "raw",
            format: "pdf",
            use_filename: false,
            unique_filename: true,
        }, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            const url = result?.secure_url;
            if (!url)
                reject(new Error("Cloudinary returned no secure_url"));
            else
                resolve(url);
        });
        stream.end(buffer);
    });
}
/** Job application CV (PDF). */
export function uploadApplicationCvPdf(buffer) {
    return uploadRawPdf(buffer, "quickhire/application-cvs");
}
/** Applicant profile CV (PDF), separate folder from job applications. */
export function uploadApplicantCvPdf(buffer) {
    return uploadRawPdf(buffer, "quickhire/applicant-cvs");
}
/** Profile / logo images (JPEG, PNG, WebP, GIF). */
export function uploadProfileImage(buffer, folder) {
    ensureConfig();
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({
            folder,
            resource_type: "image",
            use_filename: false,
            unique_filename: true,
        }, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            const url = result?.secure_url;
            if (!url)
                reject(new Error("Cloudinary returned no secure_url"));
            else
                resolve(url);
        });
        stream.end(buffer);
    });
}
export const profileImageMaxBytes = MAX_IMAGE_BYTES;
//# sourceMappingURL=cloudinary.js.map