import express from "express";
import { JobRoutes } from "../modules/job/job.route";
import { ApplicationRoutes } from "../modules/application/application.route";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { IndustryRoutes } from "../modules/industry/industry.routes";
import { SubIndustryRoutes } from "../modules/subIndustry/subIndustry.routes";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { RecruiterRoutes } from "../modules/recruiter/recruiter.route";
import { ApplicantRoutes } from "../modules/applicant/applicant.route";
import {
  CourseRoutes,
  CourseAdminRoutes,
  CourseApplicantRoutes,
} from "../modules/course/course.route";
import { RagRoutes } from "../modules/rag/rag.route";
import { BlogRoutes } from "../modules/blog/blog.routes";

const router: express.Router = express.Router();

/** Mount admin + course admin routers on same /admin prefix (URLs unchanged). */
const adminRouter = express.Router();
adminRouter.use(AdminRoutes);
adminRouter.use(CourseAdminRoutes);

/** Mount applicant profile + course purchase routes on same /applicants prefix. */
const applicantRouter = express.Router();
applicantRouter.use(ApplicantRoutes);
applicantRouter.use(CourseApplicantRoutes);

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/jobs",
    route: JobRoutes,
  },
  {
    path: "/applications",
    route: ApplicationRoutes,
  },
  {
    path: "/industries",
    route: IndustryRoutes,
  },
  {
    path: "/sub-industries",
    route: SubIndustryRoutes,
  },
  {
    path: "/admin",
    route: adminRouter,
  },
  {
    path: "/recruiters",
    route: RecruiterRoutes,
  },
  {
    path: "/applicants",
    route: applicantRouter,
  },
  {
    path: "/courses",
    route: CourseRoutes,
  },
  {
    path: "/rag",
    route: RagRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
