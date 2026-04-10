import type { NextFunction, Request, Response } from "express";
import status from "http-status";
import { ZodError } from "zod";
import { Prisma } from "../../../generated/prisma/client";
import ApiError from "../errors/ApiErrors";

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode: number = status.INTERNAL_SERVER_ERROR;
  let success = false;
  let message = error.message || "Something went wrong";
  // let error = error;

  if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
  } else if (error instanceof ZodError) {
    statusCode = status.BAD_REQUEST;
    message = error.issues.map((i) => i.message).join("; ");
  } else if (error?.name === "MulterError") {
    statusCode = status.BAD_REQUEST;
    message =
      error.code === "LIMIT_FILE_SIZE"
        ? "CV file is too large (maximum 5 MB)."
        : error.message || "File upload error";
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    statusCode = status.BAD_REQUEST;
    message = "Validation Error";
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      statusCode = status.CONFLICT;
      message = "Duplicate key error";
    } else if (error.code === "P2025") {
      statusCode = status.NOT_FOUND;

      message =
        "An operation failed because it depends on one or more records that were required but not found.";
    } else if (error.code === "P2003") {
      statusCode = status.BAD_REQUEST;

      message = "Foreign key constraint failed";
    }
  } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    statusCode = status.INTERNAL_SERVER_ERROR;
    message = "Error occurred during query execution";
  } else if (error instanceof Prisma.PrismaClientInitializationError) {
    if (error.errorCode === "P1000") {
      statusCode = status.UNAUTHORIZED;
      message = "Authentication failed. Please check your credentials!";
    } else if (error.errorCode === "P1001") {
      statusCode = status.BAD_REQUEST;
      message = "Can't reach database server";
    }
  }

  res.status(statusCode).json({
    success: success,
    message: message,
    error,
  });
};

export default globalErrorHandler;
