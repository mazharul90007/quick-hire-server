import { NextFunction, Request, Response, Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";
import { jobController } from "./job.controller";
import { jobValidations } from "./job.validation";

const router: Router = Router();

//create job
router.post(
  "/",
  auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = jobValidations.createJobValidationSchema.parse(req.body);
      return jobController.createJob(req, res, next);
    } catch (error) {
      next(error);
    }
  },
);

//Get all jobs
router.get("/", jobController.getAllJobs);

//Get single job
router.get("/:id", jobController.getSingleJob);

export const JobRoutes = router;
