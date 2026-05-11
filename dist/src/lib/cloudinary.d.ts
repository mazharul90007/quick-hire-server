/** Job application CV (PDF). */
export declare function uploadApplicationCvPdf(buffer: Buffer): Promise<string>;
/** Applicant profile CV (PDF), separate folder from job applications. */
export declare function uploadApplicantCvPdf(buffer: Buffer): Promise<string>;
/** Base image upload function. */
export declare function uploadImage(buffer: Buffer, folder: string): Promise<{
    url: string;
    publicId: string;
}>;
/** Profile / logo images (JPEG, PNG, WebP, GIF). Returns only the URL for compatibility. */
export declare function uploadProfileImage(buffer: Buffer, folder: string): Promise<string>;
/** Delete an asset from Cloudinary. */
export declare function deleteFromCloudinary(publicId: string): Promise<void>;
export declare const profileImageMaxBytes: number;
//# sourceMappingURL=cloudinary.d.ts.map