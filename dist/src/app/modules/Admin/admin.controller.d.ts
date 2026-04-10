import { Request, Response } from "express";
export declare const adminController: {
    getAllApplicants: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getSingleApplicant: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateApplicant: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllRecruiters: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getSingleRecruiter: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateRecruiter: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllAdmins: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getSingleAdmin: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getMyProfile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateMyProfile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateAdminProfile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getUserById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    softDeleteUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateUserStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=admin.controller.d.ts.map