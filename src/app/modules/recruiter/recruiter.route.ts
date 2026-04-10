import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { uploadProfileAssets } from "../../middlewares/uploadProfileAssets";
import { parseOptionalMultipartJson } from "../../middlewares/parseOptionalMultipartJson";
import { UserRole } from "../../../../generated/prisma/enums";
import { recruiterController } from "./recruiter.controller";
import { recruiterValidation } from "./recruiter.validation";

const router = express.Router();

//==========Get Recruiter Profile=========
router.get(
  "/me",
  auth(UserRole.RECRUITER),
  recruiterController.getMyProfile,
);

//==========Update Recruiter Profile=========
router.patch(
  "/me",
  auth(UserRole.RECRUITER),
  uploadProfileAssets,
  parseOptionalMultipartJson,
  validateRequest(recruiterValidation.updateMyProfileSchema),
  recruiterController.updateMyProfile,
);

export const RecruiterRoutes = router;
