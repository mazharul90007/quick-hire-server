import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import pg from "pg";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const blogs = [
    {
      title: "Mastering the Tech Interview: Tips from Google Engineers",
      slug: "mastering-tech-interview-tips",
      content: "The tech interview is often seen as a daunting hurdle, but with the right preparation, it can be your greatest opportunity to shine. In this article, we'll dive deep into the strategies used by successful candidates at top-tier tech companies. We'll cover everything from data structures and algorithms to the behavioral 'soft' skills that often make the difference between a 'no' and a 'hire'.",
      excerpt: "Expert advice on cracking the code for tech interviews at top-tier companies like Google, Meta, and Amazon.",
      category: "Interview Tips",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read",
      isPublished: true,
    },
    {
      title: "The Future of Remote Work in 2026: What to Expect",
      slug: "future-of-remote-work-2026",
      content: "As we move further into the decade, the landscape of work continues to shift. Remote and hybrid models are no longer 'alternative' - they are becoming the standard. This post explores the technological advancements and cultural shifts that are defining how we work from anywhere in the world. We'll look at the rise of the metaverse office, asynchronous communication tools, and the increasing importance of work-life boundaries.",
      excerpt: "Exploring the technological and cultural shifts defining the next era of professional work environments.",
      category: "Career Advice",
      author: "David Chen",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read",
      isPublished: true,
    },
    {
      title: "Top 10 High-Paying Careers in Finance for the Next Decade",
      slug: "top-10-high-paying-finance-careers",
      content: "Finance remains one of the most lucrative industries for ambitious professionals. However, the specific roles in high demand are changing. From sustainable finance and ESG specialists to quantitative analysts and fintech entrepreneurs, discover where the growth is happening and how you can position yourself for a high-impact, high-reward career in the financial sector.",
      excerpt: "A comprehensive guide to the most lucrative and high-growth opportunities in the evolving financial landscape.",
      category: "Finance",
      author: "Michael Roberts",
      image: "https://images.unsplash.com/photo-1454165833767-1260784461d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read",
      isPublished: true,
    },
    {
      title: "Building a Personal Brand: Why it Matters for Your Career",
      slug: "building-personal-brand-importance",
      content: "In today's digital age, your reputation precedes you. Building a strong personal brand is no longer just for influencers - it's a vital tool for every professional. We'll discuss how to identify your unique value proposition, leverage platforms like LinkedIn, and consistently communicate your expertise to attract the right opportunities without ever having to apply for a job.",
      excerpt: "Learn how to stand out in a crowded market by developing a professional identity that attracts elite opportunities.",
      category: "Leadership",
      author: "Emily Davis",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read",
      isPublished: true,
    },
    {
      title: "Design Thinking: A Framework for Creative Problem Solving",
      slug: "design-thinking-creative-problem-solving",
      content: "Design thinking is not just for designers. It's a powerful methodology for solving complex problems across any industry. This article breaks down the five stages of the design thinking process: Empathize, Define, Ideate, Prototype, and Test. Discover how you can apply these principles to your daily workflow to foster innovation and create more user-centric solutions.",
      excerpt: "How to apply human-centered design principles to solve complex business challenges and drive innovation.",
      category: "Design",
      author: "Alex Rivera",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "9 min read",
      isPublished: true,
    }
  ];

  console.log("Seeding blogs...");
  for (const blog of blogs) {
    await prisma.blog.upsert({
      where: { slug: blog.slug },
      update: {},
      create: blog,
    });
  }
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
