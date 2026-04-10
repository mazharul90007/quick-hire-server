import { Request, Response } from "express";
import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import pick from "../../../shared/pick";
import { UserRole } from "../../../../generated/prisma/enums";
import {
  uploadApplicantCvPdf,
  uploadProfileImage,
} from "../../../lib/cloudinary";
import {
  COMPANY_LOGO_FOLDER,
  PROFILE_IMAGE_FOLDER,
  assertPdfMagic,
  profileMultipartFiles,
} from "../../helpers/profileMultipart";
import { adminServices, type AdminSelfFileUrls } from "./admin.service";
import {
  applicantListQueryKeys,
  recruiterListQueryKeys,
  adminListQueryKeys,
} from "./admin.constant";

const listOptionsKeys = ["page", "limit", "sortBy", "sortOrder"] as const;

//==========Get All Applicants=========
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

//==========Get Single Applicant=========
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

//==========Update Applicant=========
const updateApplicant = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = { ...(req.body as Record<string, unknown>) };
  const f = profileMultipartFiles(req);
  if (f.image?.buffer?.length) {
    payload.image = await uploadProfileImage(
      f.image.buffer,
      PROFILE_IMAGE_FOLDER,
    );
  }
  if (f.cv?.buffer?.length) {
    assertPdfMagic(f.cv);
    payload.cv = await uploadApplicantCvPdf(f.cv.buffer);
  }
  const result = await adminServices.updateApplicant(
    id as string,
    payload as Parameters<typeof adminServices.updateApplicant>[1],
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Applicant updated successfully",
    data: result,
  });
});

//==========Get All Recruiters=========
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

//==========Get Single Recruiter=========
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

//==========Update Recruiter=========
const updateRecruiter = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = { ...(req.body as Record<string, unknown>) };
  const f = profileMultipartFiles(req);
  if (f.image?.buffer?.length) {
    payload.image = await uploadProfileImage(
      f.image.buffer,
      PROFILE_IMAGE_FOLDER,
    );
  }
  if (f.companyLogo?.buffer?.length) {
    payload.companyLogo = await uploadProfileImage(
      f.companyLogo.buffer,
      COMPANY_LOGO_FOLDER,
    );
  }
  const result = await adminServices.updateRecruiter(
    id as string,
    payload as Parameters<typeof adminServices.updateRecruiter>[1],
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Recruiter updated successfully",
    data: result,
  });
});

//==========Get All Admins=========
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

//==========Get Single Admin=========
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

//==========Get Admin Profile (self)=========
const getMyProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await adminServices.getMyProfile(req.user!.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Profile fetched successfully",
    data: result,
  });
});

//==========Update Admin Profile (self)=========
const updateMyProfile = catchAsync(async (req: Request, res: Response) => {
  const body = req.body as {
    name?: string;
    address?: string;
    phone?: string;
  };
  const f = profileMultipartFiles(req);
  const urls: AdminSelfFileUrls = {};
  if (f.image?.buffer?.length) {
    urls.image = await uploadProfileImage(f.image.buffer, PROFILE_IMAGE_FOLDER);
  }
  const result = await adminServices.updateMyProfile(req.user!.id, body, urls);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Profile updated",
    data: result,
  });
});

//==========Update Admin Profile (by id)=========
const updateAdminProfile = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = { ...(req.body as Record<string, unknown>) };
  const f = profileMultipartFiles(req);
  if (f.image?.buffer?.length) {
    payload.image = await uploadProfileImage(
      f.image.buffer,
      PROFILE_IMAGE_FOLDER,
    );
  }
  const result = await adminServices.updateAdminProfile(
    id as string,
    payload as Parameters<typeof adminServices.updateAdminProfile>[1],
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Admin profile updated successfully",
    data: result,
  });
});

//==========Get User By Id=========
const getUserById = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const includeDeleted = req.query.includeDeleted === "true";
  const result = await adminServices.getUserById(
    userId as string,
    includeDeleted,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User fetched successfully",
    data: result,
  });
});

//==========Soft Delete User=========
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

//==========Update User Status=========
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
  getMyProfile,
  updateMyProfile,
  updateAdminProfile,
  getUserById,
  softDeleteUser,
  updateUserStatus,
};
