import express from "express";
import { SubIndustryController } from "./subIndustry.controller";
import { SubIndustryValidation } from "./subIndustry.validation";
import { validateRequest } from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";

const router = express.Router();

router.post(
  "/create-sub-industry",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(SubIndustryValidation.createSubIndustry),
  SubIndustryController.createSubIndustry,
);

export const SubIndustryRoutes = router;
