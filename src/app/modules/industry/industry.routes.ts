import express from "express";
import { IndustryController } from "./industry.controller";
import { IndustryValidation } from "./industry.validation";
import { validateRequest } from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";

const router = express.Router();

router.post(
  "/create-industry",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  validateRequest(IndustryValidation.createIndustry),
  IndustryController.createIndustry,
);

export const IndustryRoutes = router;
