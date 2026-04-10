import { NextFunction, Request, Response } from "express";
/**
 * After multer: multipart has `cv` (file) and `data` (text = JSON string).
 * Replaces `req.body` with the parsed object for Zod validation.
 */
export declare const parseApplicationDataField: (req: Request, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=application.middleware.d.ts.map