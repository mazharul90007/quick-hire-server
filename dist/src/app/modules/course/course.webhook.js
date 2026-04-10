import express from "express";
import { courseController } from "./course.controller";
/**
 * Stripe needs the raw body on this path only — register before express.json() in app.ts.
 */
export function mountCourseStripeWebhook(app, apiPrefix = "/api/v1") {
    app.post(`${apiPrefix}/courses/stripe/webhook`, express.raw({
        // Stripe sends `application/json; charset=utf-8` — strict `type: "application/json"` can skip the parser.
        type: (req) => (req.headers["content-type"] ?? "").includes("application/json"),
        limit: "1mb",
    }), courseController.stripeWebhook);
}
//# sourceMappingURL=course.webhook.js.map