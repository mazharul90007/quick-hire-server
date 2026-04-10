import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { uploadProfileAssets } from "../../middlewares/uploadProfileAssets";
import { parseOptionalMultipartJson } from "../../middlewares/parseOptionalMultipartJson";
import { adminController } from "./admin.controller";
import { adminValidations } from "./admin.validation";
import { adminStaffRoles } from "./admin.constant";

const router = express.Router();

router.get("/me", auth(...adminStaffRoles), adminController.getMyProfile);

router.patch(
  "/me",
  auth(...adminStaffRoles),
  uploadProfileAssets,
  parseOptionalMultipartJson,
  validateRequest(adminValidations.updateMyProfileSchema),
  adminController.updateMyProfile,
);

// ----- Applicants -----
router.get(
  "/applicants",
  auth(...adminStaffRoles),
  adminController.getAllApplicants,
);

router.get(
  "/applicants/:id",
  auth(...adminStaffRoles),
  adminController.getSingleApplicant,
);

router.patch(
  "/applicants/:id",
  auth(...adminStaffRoles),
  uploadProfileAssets,
  parseOptionalMultipartJson,
  validateRequest(adminValidations.updateApplicantSchema),
  adminController.updateApplicant,
);

// ----- Recruiters -----
router.get(
  "/recruiters",
  auth(...adminStaffRoles),
  adminController.getAllRecruiters,
);

router.get(
  "/recruiters/:id",
  auth(...adminStaffRoles),
  adminController.getSingleRecruiter,
);

router.patch(
  "/recruiters/:id",
  auth(...adminStaffRoles),
  uploadProfileAssets,
  parseOptionalMultipartJson,
  validateRequest(adminValidations.updateRecruiterSchema),
  adminController.updateRecruiter,
);

// ----- Admin profiles (staff) -----
router.get("/admins", auth(...adminStaffRoles), adminController.getAllAdmins);

router.get(
  "/admins/:id",
  auth(...adminStaffRoles),
  adminController.getSingleAdmin,
);

router.patch(
  "/admins/:id",
  auth(...adminStaffRoles),
  uploadProfileAssets,
  parseOptionalMultipartJson,
  validateRequest(adminValidations.updateAdminProfileSchema),
  adminController.updateAdminProfile,
);

// ----- User-level (get, soft delete, account status) -----
router.get(
  "/users/:userId",
  auth(...adminStaffRoles),
  adminController.getUserById,
);

router.delete(
  "/users/:userId",
  auth(...adminStaffRoles),
  adminController.softDeleteUser,
);

router.patch(
  "/users/:userId/status",
  auth(...adminStaffRoles),
  validateRequest(adminValidations.updateUserStatusSchema),
  adminController.updateUserStatus,
);

export const AdminRoutes = router;
