import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "../../../../generated/prisma/enums";
import { categoryValidation } from "./category.validation";
import { categoryController } from "./category.controller";
const router = Router();
//===============Create Category===============
router.post("/", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), (req, res, next) => {
    try {
        req.body = categoryValidation.createCategoryValidationSchema.parse(req.body);
        return categoryController.createCategory(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
//==============Get All Categories==============
router.get("/", categoryController.getAllCategories);
export const CategoryRoutes = router;
//# sourceMappingURL=category.route.js.map