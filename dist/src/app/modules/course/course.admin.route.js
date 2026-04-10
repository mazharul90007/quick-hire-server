import express from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { adminStaffRoles } from "../Admin/admin.constant";
import { courseController } from "./course.controller";
import { courseValidation } from "./course.validation";
const router = express.Router();
/** Admin CRUD — mounted under /api/v1/admin (see routes/index.ts). */
router.get("/courses", auth(...adminStaffRoles), courseController.adminListAll);
router.post("/courses", auth(...adminStaffRoles), validateRequest(courseValidation.createCourseSchema), courseController.adminCreate);
router.patch("/courses/:courseId", auth(...adminStaffRoles), validateRequest(courseValidation.updateCourseSchema), courseController.adminUpdate);
router.delete("/courses/:courseId", auth(...adminStaffRoles), courseController.adminDelete);
export const CourseAdminRoutes = router;
//# sourceMappingURL=course.admin.route.js.map