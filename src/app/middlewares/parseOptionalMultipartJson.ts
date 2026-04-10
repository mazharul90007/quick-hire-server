import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiErrors";

/**
 * If multipart field `data` is present, replace `req.body` with parsed JSON.
 * Otherwise leave `req.body` unchanged (so `application/json` PATCH still works).
 */
export function parseOptionalMultipartJson(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const raw = req.body?.data;
  if (raw === undefined || raw === null || String(raw).trim() === "") {
    if (req.body && typeof req.body === "object" && "data" in req.body) {
      const { data: _d, ...rest } = req.body as Record<string, unknown>;
      req.body = rest;
    }
    next();
    return;
  }
  const str = typeof raw === "string" ? raw : String(raw);
  try {
    const parsed: unknown = JSON.parse(str);
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
      next(new ApiError(400, 'Field "data" must be a JSON object.'));
      return;
    }
    req.body = parsed as Record<string, unknown>;
    next();
  } catch {
    next(new ApiError(400, 'Field "data" must be valid JSON.'));
  }
}
