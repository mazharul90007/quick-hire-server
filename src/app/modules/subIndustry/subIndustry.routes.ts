import express from "express";
import { SubIndustryController } from "./subIndustry.controller";
import { SubIndustryValidation } from "./subIndustry.validation";
import { validateRequest } from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";

const router = express.Router();

//==================Create subIndustries===================
router.post(
  "/create-sub-industry",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(SubIndustryValidation.createSubIndustry),
  SubIndustryController.createSubIndustry,
);

//==================Get all subIndustries===================
router.get("/", SubIndustryController.getAllSubIndustries);

//==================Update subIndustry===================
router.patch(
  "/:id",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(SubIndustryValidation.updateSubIndustry),
  SubIndustryController.updateSubIndustry,
);

export const SubIndustryRoutes = router;
