import { type Application } from "express";
/**
 * Stripe needs the raw body on this path only — register before express.json() in app.ts.
 */
export declare function mountCourseStripeWebhook(app: Application, apiPrefix?: string): void;
//# sourceMappingURL=course.webhook.d.ts.map