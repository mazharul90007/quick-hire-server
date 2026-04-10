import { NextFunction, Request, Response } from "express";
/**
 * If multipart field `data` is present, replace `req.body` with parsed JSON.
 * Otherwise leave `req.body` unchanged (so `application/json` PATCH still works).
 */
export declare function parseOptionalMultipartJson(req: Request, _res: Response, next: NextFunction): void;
//# sourceMappingURL=parseOptionalMultipartJson.d.ts.map