import { Request, Response } from "express";
import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AuthService } from "./auth.service";

//============Create Applicant=============
const createApplicant = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.createApplicant(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Applicant registered successfully!",
    data: result,
  });
});

//====================Create Admin====================
const createAdmin = catchAsync(async (req, res) => {
  const result = await AuthService.createAdmin(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Admin created successfully!",
    data: result,
  });
});

//====================Forget Password==================
const forgetPassword = catchAsync(async (req, res) => {
  await AuthService.forgetPassword(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Password reset link sent to email!",
    data: null,
  });
});

//====================Reset Password=====================
const resetPassword = catchAsync(async (req, res) => {
  await AuthService.resetPassword(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Password reset successful! You can now log in.",
    data: null,
  });
});

//====================Create Recruiter====================
const createRecruiter = catchAsync(async (req, res) => {
  const result = await AuthService.createRecruiter(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Recruiter registered successfully! Please verify your email.",
    data: result,
  });
});

export const AuthController = {
  createApplicant,
  createAdmin,
  forgetPassword,
  resetPassword,
  createRecruiter,
};
