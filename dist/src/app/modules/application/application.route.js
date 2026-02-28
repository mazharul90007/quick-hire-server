import express from "express";
import { applicationController } from "./application.controller";
import { applicationValidation } from "./application.validation";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";
const router = express.Router();
// =============Create application================
router.post("/", (req, res, next) => {
    try {
        req.body = applicationValidation.createApplicationValidationSchema.parse(req.body);
        return applicationController.createApplication(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
// ================Get all applications==================
router.get("/", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), applicationController.getAllApplications);
// ================Get single application==============s
router.get("/:id", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), applicationController.getSingleApplication);
export const ApplicationRoutes = router;
//# sourceMappingURL=application.route.js.map