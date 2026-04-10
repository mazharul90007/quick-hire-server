import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "../../../../generated/prisma/enums";
import { adminStaffRoles } from "../Admin/admin.constant";
import { courseController } from "./course.controller";
import { courseValidation } from "./course.validation";
const publicCatalogRouter = express.Router();
//======== List published courses =========
publicCatalogRouter.get("/", courseController.listPublished);
//======== Get one published course (id or slug) =========
publicCatalogRouter.get("/:idOrSlug", courseController.getPublishedOne);
export const CourseRoutes = publicCatalogRouter;
// =============================================================================
// Admin course CRUD — mounted at /api/v1/admin
// =============================================================================
const adminCourseRouter = express.Router();
//======== List all courses (admin) =========
adminCourseRouter.get("/courses", auth(...adminStaffRoles), courseController.adminListAll);
//======== Create course =========
adminCourseRouter.post("/courses", auth(...adminStaffRoles), validateRequest(courseValidation.createCourseSchema), courseController.adminCreate);
//======== Update course =========
adminCourseRouter.patch("/courses/:courseId", auth(...adminStaffRoles), validateRequest(courseValidation.updateCourseSchema), courseController.adminUpdate);
//======== Delete / unpublish course =========
adminCourseRouter.delete("/courses/:courseId", auth(...adminStaffRoles), courseController.adminDelete);
export const CourseAdminRoutes = adminCourseRouter;
// =============================================================================
// Applicant — checkout & receipts — mounted at /api/v1/applicants
// =============================================================================
const applicantCourseRouter = express.Router();
//======== Stripe checkout (returns checkoutUrl) =========
applicantCourseRouter.post("/me/course-checkout", auth(UserRole.APPLICANT), validateRequest(courseValidation.checkoutCourseSchema), courseController.applicantCheckout);
//======== List my course purchases =========
applicantCourseRouter.get("/me/course-purchases", auth(UserRole.APPLICANT), courseController.applicantMyPurchases);
//======== Download receipt PDF =========
applicantCourseRouter.get("/me/course-purchases/:purchaseId/receipt", auth(UserRole.APPLICANT), courseController.applicantReceiptPdf);
export const CourseApplicantRoutes = applicantCourseRouter;
//# sourceMappingURL=course.route.js.map