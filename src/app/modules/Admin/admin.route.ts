import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "../../../../generated/prisma/enums";
import { adminController } from "./admin.controller";
import { adminValidations } from "./admin.validation";

const router = express.Router();

const staffRoles = [UserRole.ADMIN, UserRole.SUPER_ADMIN] as const;

// ----- Applicants -----
router.get(
  "/applicants",
  auth(...staffRoles),
  adminController.getAllApplicants,
);

router.get(
  "/applicants/:id",
  auth(...staffRoles),
  adminController.getSingleApplicant,
);

router.patch(
  "/applicants/:id",
  auth(...staffRoles),
  validateRequest(adminValidations.updateApplicantSchema),
  adminController.updateApplicant,
);

// ----- Recruiters -----
router.get(
  "/recruiters",
  auth(...staffRoles),
  adminController.getAllRecruiters,
);

router.get(
  "/recruiters/:id",
  auth(...staffRoles),
  adminController.getSingleRecruiter,
);

router.patch(
  "/recruiters/:id",
  auth(...staffRoles),
  validateRequest(adminValidations.updateRecruiterSchema),
  adminController.updateRecruiter,
);

// ----- Admin profiles (staff) -----
router.get("/admins", auth(...staffRoles), adminController.getAllAdmins);

router.get(
  "/admins/:id",
  auth(...staffRoles),
  adminController.getSingleAdmin,
);

router.patch(
  "/admins/:id",
  auth(...staffRoles),
  validateRequest(adminValidations.updateAdminProfileSchema),
  adminController.updateAdminProfile,
);

// ----- User-level (soft delete, role, account status) -----
router.delete(
  "/users/:userId",
  auth(...staffRoles),
  adminController.softDeleteUser,
);

router.patch(
  "/users/:userId/role",
  auth(...staffRoles),
  validateRequest(adminValidations.updateUserRoleSchema),
  adminController.updateUserRole,
);

router.patch(
  "/users/:userId/status",
  auth(...staffRoles),
  validateRequest(adminValidations.updateUserStatusSchema),
  adminController.updateUserStatus,
);

export const AdminRoutes = router;
