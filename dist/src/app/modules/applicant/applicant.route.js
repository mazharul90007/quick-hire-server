import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { uploadProfileAssets } from "../../middlewares/uploadProfileAssets";
import { parseOptionalMultipartJson } from "../../middlewares/parseOptionalMultipartJson";
import { UserRole } from "../../../../generated/prisma/enums";
import { applicantController } from "./applicant.controller";
import { applicantValidation } from "./applicant.validation";
const router = express.Router();
//==========Get Applicant Profile=========
router.get("/me", auth(UserRole.APPLICANT), applicantController.getMyProfile);
//==========Update Applicant Profile=========
router.patch("/me", auth(UserRole.APPLICANT), uploadProfileAssets, parseOptionalMultipartJson, validateRequest(applicantValidation.updateMyProfileSchema), applicantController.updateMyProfile);
export const ApplicantRoutes = router;
//# sourceMappingURL=applicant.route.js.map