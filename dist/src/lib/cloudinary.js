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
/** Base image upload function. */
export function uploadImage(buffer, folder) {
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
            const publicId = result?.public_id;
            if (!url || !publicId)
                reject(new Error("Cloudinary returned no secure_url or public_id"));
            else
                resolve({ url, publicId });
        });
        stream.end(buffer);
    });
}
/** Profile / logo images (JPEG, PNG, WebP, GIF). Returns only the URL for compatibility. */
export async function uploadProfileImage(buffer, folder) {
    const result = await uploadImage(buffer, folder);
    return result.url;
}
/** Delete an asset from Cloudinary. */
export async function deleteFromCloudinary(publicId) {
    ensureConfig();
    try {
        await cloudinary.uploader.destroy(publicId);
    }
    catch (error) {
        console.error("Cloudinary deletion failed:", error);
        // We don't necessarily want to throw if deletion fails, 
        // but the user requested it as part of a transaction logic.
        throw error;
    }
}
export const profileImageMaxBytes = MAX_IMAGE_BYTES;
//# sourceMappingURL=cloudinary.js.map