import Stripe from "stripe";
export declare const stripe: Stripe | null;
/** True when checkout / webhooks can run (otherwise we return a clear API error). */
export declare function isStripeConfigured(): boolean;
//# sourceMappingURL=stripe.d.ts.map