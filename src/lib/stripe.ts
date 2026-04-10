import Stripe from "stripe";

/**
 * Stripe SDK singleton. Requires STRIPE_SECRET_KEY in .env (test key sk_test_... in development).
 */
const secret = process.env.STRIPE_SECRET_KEY;

export const stripe = secret
  ? new Stripe(secret, {
      // Let the installed SDK pick a compatible API version
      typescript: true,
    })
  : null;

/** True when checkout / webhooks can run (otherwise we return a clear API error). */
export function isStripeConfigured(): boolean {
  return Boolean(stripe && process.env.STRIPE_WEBHOOK_SECRET);
}
