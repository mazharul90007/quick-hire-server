import { Request, Response } from "express";
export declare const AuthController: {
    createApplicant: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    createAdmin: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    forgetPassword: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    resetPassword: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    createRecruiter: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map