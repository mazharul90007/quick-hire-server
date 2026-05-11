import { Request, Response } from "express";
export declare const BlogController: {
    createBlog: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllBlogs: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getBlogById: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getBlogBySlug: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateBlog: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteBlog: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=blog.controller.d.ts.map