import { NextFunction, Request, Response } from "express";
import z from "zod";
import ApiError from "../errors/ApiErrors";

export const validateRequest = (zodSchema: z.ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.body?.data) {
      try {
        req.body = JSON.parse(req.body.data as string);
      } catch {
        return next(new ApiError(400, "Invalid JSON in field data."));
      }
    }
 
    const parsedResult = zodSchema.safeParse(req.body);
 
    if (!parsedResult.success) {
      return next(parsedResult.error);
    }
 
    req.body = parsedResult.data;
    next();
  };
};
