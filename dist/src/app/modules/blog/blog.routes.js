import express from "express";
import { BlogController } from "./blog.controller";
import { BlogValidation } from "./blog.validation";
import { validateRequest } from "../../middlewares/validateRequest";
import { uploadBlogImage } from "../../middlewares/uploadBlogImage";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";
const router = express.Router();
router.get("/", BlogController.getAllBlogs);
router.get("/:id", BlogController.getBlogById);
router.get("/slug/:slug", BlogController.getBlogBySlug);
router.post("/create-blog", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), uploadBlogImage, validateRequest(BlogValidation.createBlog), BlogController.createBlog);
router.patch("/:id", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), uploadBlogImage, validateRequest(BlogValidation.updateBlog), BlogController.updateBlog);
router.delete("/:id", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), BlogController.deleteBlog);
export const BlogRoutes = router;
//# sourceMappingURL=blog.routes.js.map