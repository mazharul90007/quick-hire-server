import { Blog, Prisma } from "../../../../generated/prisma/client";
import { IPaginationOptions } from "../../interfaces/pagination";
import { IBlogFilterRequest } from "./blog.interface";
export type IGenericResponse<T> = {
    meta: {
        page: number;
        limit: number;
        total: number;
    };
    data: T;
};
export declare const BlogService: {
    createBlog: (data: Prisma.BlogCreateInput) => Promise<Blog>;
    getAllBlogs: (filters: IBlogFilterRequest, options: IPaginationOptions) => Promise<IGenericResponse<Blog[]>>;
    getBlogById: (id: string) => Promise<Blog | null>;
    getBlogBySlug: (slug: string) => Promise<Blog | null>;
    updateBlog: (id: string, payload: Partial<Blog>) => Promise<Blog | null>;
    deleteBlog: (id: string) => Promise<Blog | null>;
};
//# sourceMappingURL=blog.service.d.ts.map