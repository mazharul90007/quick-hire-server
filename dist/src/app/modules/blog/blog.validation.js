import { z } from "zod";
const createBlog = z.object({
    title: z.string().min(1, "Title is required"),
    slug: z.string().min(1, "Slug is required"),
    content: z.string().min(1, "Content is required"),
    excerpt: z.string().optional(),
    category: z.string().min(1, "Category is required"),
    author: z.string().min(1, "Author is required"),
    readTime: z.string().optional(),
    isPublished: z.boolean().optional(),
});
const updateBlog = z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    content: z.string().optional(),
    excerpt: z.string().optional(),
    category: z.string().optional(),
    author: z.string().optional(),
    readTime: z.string().optional(),
    isPublished: z.boolean().optional(),
});
export const BlogValidation = {
    createBlog,
    updateBlog,
};
//# sourceMappingURL=blog.validation.js.map