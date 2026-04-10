import type { Request } from "express";
export declare const PROFILE_IMAGE_FOLDER = "quickhire/profile-images";
export declare const COMPANY_LOGO_FOLDER = "quickhire/company-logos";
export declare const INDUSTRY_LOGO_FOLDER = "quickhire/industry-logos";
export declare function profileMultipartFiles(req: Request): {
    image: Express.Multer.File | undefined;
    companyLogo: Express.Multer.File | undefined;
    cv: Express.Multer.File | undefined;
};
export declare function assertPdfMagic(file: Express.Multer.File): void;
//# sourceMappingURL=profileMultipart.d.ts.map