import express from "express";
import { applicationController } from "./application.controller";
import { applicationValidation } from "./application.validation";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "../../../../generated/prisma/enums";

const router = express.Router();

//==============Create Application==============
router.post(
  "/",
  auth(UserRole.APPLICANT),
  validateRequest(applicationValidation.createApplicationValidationSchema),
  applicationController.createApplication,
);

//==============Get All Applications==============
router.get(
  "/",
  auth(
    UserRole.ADMIN,
    UserRole.SUPER_ADMIN,
    UserRole.RECRUITER,
    UserRole.APPLICANT,
  ),
  applicationController.getAllApplications,
);

//==============Get Single Application==============
router.get(
  "/:id",
  auth(
    UserRole.ADMIN,
    UserRole.SUPER_ADMIN,
    UserRole.RECRUITER,
    UserRole.APPLICANT,
  ),
  applicationController.getSingleApplication,
);

export const ApplicationRoutes = router;
