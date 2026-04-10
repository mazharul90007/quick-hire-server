import express from "express";
import { AuthController } from "./auth.controller";
import { AuthValidation } from "./auth.validation";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "../../../../generated/prisma/enums";
import auth from "../../middlewares/auth";
const router = express.Router();
router.post("/register-applicant", validateRequest(AuthValidation.createApplicant), AuthController.createApplicant);
//====================Create Admin====================
router.post("/create-admin", auth(UserRole.SUPER_ADMIN), validateRequest(AuthValidation.createAdmin), AuthController.createAdmin);
//====================Forget Password==================
router.post("/forget-password", validateRequest(AuthValidation.forgetPassword), AuthController.forgetPassword);
//====================Reset Password=====================
router.post("/reset-password", validateRequest(AuthValidation.resetPassword), AuthController.resetPassword);
//====================Register Recruiter====================
router.post("/register-recruiter", validateRequest(AuthValidation.createRecruiter), AuthController.createRecruiter);
export const AuthRoutes = router;
//# sourceMappingURL=auth.routes.js.map