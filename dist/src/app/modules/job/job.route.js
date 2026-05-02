import { Router } from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "../../../../generated/prisma/enums";
import { jobController } from "./job.controller";
import { jobValidations } from "./job.validation";
const router = Router();
//Smart Search (Top priority)
router.get("/ai-search", jobController.smartSearch);
//create job (recruiter only)
router.post("/", auth(UserRole.RECRUITER), validateRequest(jobValidations.createJobValidationSchema), jobController.createJob);
router.patch("/:id", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.RECRUITER), validateRequest(jobValidations.updateJobValidationSchema), jobController.updateJob);
//Get all jobs
console.log("DEFINING JOB ROUTES...");
router.get("/", jobController.getAllJobs);
//Get single job
router.get("/:id", jobController.getSingleJob);
export const JobRoutes = router;
//# sourceMappingURL=job.route.js.map