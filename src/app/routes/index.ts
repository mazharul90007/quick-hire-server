import express from "express";
import { authRoutes } from "../modules/auth/auth.routes";
import { JobRoutes } from "../modules/job/job.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { ApplicationRoutes } from "../modules/application/application.route";

const router: express.Router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: authRoutes,
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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
