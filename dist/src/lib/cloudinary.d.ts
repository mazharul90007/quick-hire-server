/** Job application CV (PDF). */
export declare function uploadApplicationCvPdf(buffer: Buffer): Promise<string>;
/** Applicant profile CV (PDF), separate folder from job applications. */
export declare function uploadApplicantCvPdf(buffer: Buffer): Promise<string>;
/** Profile / logo images (JPEG, PNG, WebP, GIF). */
export declare function uploadProfileImage(buffer: Buffer, folder: string): Promise<string>;
export declare const profileImageMaxBytes: number;
//# sourceMappingURL=cloudinary.d.ts.map