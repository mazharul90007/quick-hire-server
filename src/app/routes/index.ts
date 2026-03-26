import express from "express";
import { JobRoutes } from "../modules/job/job.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { ApplicationRoutes } from "../modules/application/application.route";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { IndustryRoutes } from "../modules/industry/industry.routes";
import { SubIndustryRoutes } from "../modules/subIndustry/subIndustry.routes";

const router: express.Router = express.Router();

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
    path: "/categories",
    route: CategoryRoutes,
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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
