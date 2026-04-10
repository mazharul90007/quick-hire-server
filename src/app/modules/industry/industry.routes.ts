import express from "express";
import { IndustryController } from "./industry.controller";
import { IndustryValidation } from "./industry.validation";
import { validateRequest } from "../../middlewares/validateRequest";
import { uploadIndustryLogo } from "../../middlewares/uploadIndustryLogo";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";

const router = express.Router();

//===============Create Industry=================
router.post(
  "/create-industry",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  uploadIndustryLogo,
  validateRequest(IndustryValidation.createIndustry),
  IndustryController.createIndustry,
);

//=================Get all Industry=====================
router.get("/", IndustryController.getAllIndustries);

//=================Update Industry Data==================
router.patch(
  "/:id",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  uploadIndustryLogo,
  validateRequest(IndustryValidation.updateIndustry),
  IndustryController.updateIndustry,
);

export const IndustryRoutes = router;
