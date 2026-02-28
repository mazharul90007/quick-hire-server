import express from "express";
import { authRoutes } from "../modules/auth/auth.routes";
import { JobRoutes } from "../modules/job/job.route";
import { CategoryRoutes } from "../modules/category/category.route";

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
    path: "/category",
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
