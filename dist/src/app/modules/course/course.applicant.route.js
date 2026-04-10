import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "../../../../generated/prisma/enums";
import { courseController } from "./course.controller";
import { courseValidation } from "./course.validation";
const router = express.Router();
/** Applicant checkout + receipts — mounted under /api/v1/applicants (see routes/index.ts). */
router.post("/me/course-checkout", auth(UserRole.APPLICANT), validateRequest(courseValidation.checkoutCourseSchema), courseController.applicantCheckout);
router.get("/me/course-purchases", auth(UserRole.APPLICANT), courseController.applicantMyPurchases);
router.get("/me/course-purchases/:purchaseId/receipt", auth(UserRole.APPLICANT), courseController.applicantReceiptPdf);
export const CourseApplicantRoutes = router;
//# sourceMappingURL=course.applicant.route.js.map