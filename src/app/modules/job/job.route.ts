import { Router } from "express";
import auth from "../../middlewares/auth";
import { validateRequest } from "../../middlewares/validateRequest";
import { UserRole } from "../../../../generated/prisma/enums";
import { jobController } from "./job.controller";
import { jobValidations } from "./job.validation";

const router: Router = Router();

//create job (recruiter only)
router.post(
  "/",
  auth(UserRole.RECRUITER),
  validateRequest(jobValidations.createJobValidationSchema),
  jobController.createJob,
);

//Get all jobs
router.get("/", jobController.getAllJobs);

//Get single job
router.get("/:id", jobController.getSingleJob);

export const JobRoutes = router;
