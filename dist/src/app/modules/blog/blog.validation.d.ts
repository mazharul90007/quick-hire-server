import { z } from "zod";
export declare const BlogValidation: {
    createBlog: z.ZodObject<{
        title: z.ZodString;
        slug: z.ZodString;
        content: z.ZodString;
        excerpt: z.ZodOptional<z.ZodString>;
        category: z.ZodString;
        author: z.ZodString;
        readTime: z.ZodOptional<z.ZodString>;
        isPublished: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
    updateBlog: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        slug: z.ZodOptional<z.ZodString>;
        content: z.ZodOptional<z.ZodString>;
        excerpt: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
        author: z.ZodOptional<z.ZodString>;
        readTime: z.ZodOptional<z.ZodString>;
        isPublished: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
};
//# sourceMappingURL=blog.validation.d.ts.map