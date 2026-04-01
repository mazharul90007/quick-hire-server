import { Request, Response } from "express";
import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import pick from "../../../shared/pick";
import { UserRole } from "../../../../generated/prisma/enums";
import { adminServices } from "./admin.service";
import {
  applicantListQueryKeys,
  recruiterListQueryKeys,
  adminListQueryKeys,
} from "./admin.constant";

const listOptionsKeys = ["page", "limit", "sortBy", "sortOrder"] as const;

const getAllApplicants = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, [...applicantListQueryKeys]);
  const options = pick(req.query, [...listOptionsKeys]);
  const result = await adminServices.getAllApplicants(filters, options);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Applicants fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getSingleApplicant = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const includeDeleted = req.query.includeDeleted === "true";
  const result = await adminServices.getSingleApplicant(
    id as string,
    includeDeleted,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Applicant fetched successfully",
    data: result,
  });
});

const updateApplicant = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminServices.updateApplicant(id as string, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Applicant updated successfully",
    data: result,
  });
});

const getAllRecruiters = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, [...recruiterListQueryKeys]);
  const options = pick(req.query, [...listOptionsKeys]);
  const result = await adminServices.getAllRecruiters(filters, options);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Recruiters fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getSingleRecruiter = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const includeDeleted = req.query.includeDeleted === "true";
  const result = await adminServices.getSingleRecruiter(
    id as string,
    includeDeleted,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Recruiter fetched successfully",
    data: result,
  });
});

const updateRecruiter = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminServices.updateRecruiter(
    id as string,
    req.body,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Recruiter updated successfully",
    data: result,
  });
});

const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, [...adminListQueryKeys]);
  const options = pick(req.query, [...listOptionsKeys]);
  const result = await adminServices.getAllAdmins(filters, options);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Admins fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const includeDeleted = req.query.includeDeleted === "true";
  const result = await adminServices.getSingleAdmin(
    id as string,
    includeDeleted,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Admin fetched successfully",
    data: result,
  });
});

const updateAdminProfile = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminServices.updateAdminProfile(id as string, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Admin profile updated successfully",
    data: result,
  });
});

const softDeleteUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const actorRole = req.user!.role as UserRole;
  const result = await adminServices.softDeleteUser(
    req.user!.id,
    actorRole,
    userId as string,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User soft-deleted successfully",
    data: result,
  });
});

const updateUserRole = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { role } = req.body;
  const actorRole = req.user!.role as UserRole;
  const result = await adminServices.updateUserRole(
    req.user!.id,
    actorRole,
    userId as string,
    role,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User role updated successfully",
    data: result,
  });
});

const updateUserStatus = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { status: userStatus } = req.body;
  const actorRole = req.user!.role as UserRole;
  const result = await adminServices.updateUserStatus(
    req.user!.id,
    actorRole,
    userId as string,
    userStatus,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User status updated successfully",
    data: result,
  });
});

export const adminController = {
  getAllApplicants,
  getSingleApplicant,
  updateApplicant,
  getAllRecruiters,
  getSingleRecruiter,
  updateRecruiter,
  getAllAdmins,
  getSingleAdmin,
  updateAdminProfile,
  softDeleteUser,
  updateUserRole,
  updateUserStatus,
};
