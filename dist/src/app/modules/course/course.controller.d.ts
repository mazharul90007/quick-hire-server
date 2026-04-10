import { Request, Response } from "express";
export declare const courseController: {
    listPublished: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getPublishedOne: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    adminListAll: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    adminCreate: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    adminUpdate: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    adminDelete: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    applicantCheckout: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    applicantMyPurchases: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    applicantReceiptPdf: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    stripeWebhook: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=course.controller.d.ts.map