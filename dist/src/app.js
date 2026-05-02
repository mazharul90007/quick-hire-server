import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import status from "http-status";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { notFound } from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
import { mountCourseStripeWebhook } from "./app/modules/course/course.webhook";
const app = express();
//parser
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://quick-hire-client-chi.vercel.app",
    ],
    credentials: true,
}));
app.use(cookieParser());
// Course module: Stripe webhook (raw body) before JSON parser
mountCourseStripeWebhook(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use("/api/v1", router);
app.get("/", (req, res) => {
    res.send("QuickHire server is running...");
});
app.use(notFound);
// Global error handler
app.use(globalErrorHandler);
app.use((req, res, next) => {
    res.status(status.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND...!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found",
        },
    });
});
export default app;
//# sourceMappingURL=app.js.map