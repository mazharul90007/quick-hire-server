/**
 * Course.priceAmount is major currency (may be fractional, e.g. 99.99).
 * Stripe needs integer minor units — use Math.round(major × 100) for 2-decimal currencies.
 */
/** Major units (DB, float-safe) → Stripe unit_amount / Checkout line item. */
export declare function coursePriceToStripeMinorUnits(majorUnits: number, currency: string): number;
//# sourceMappingURL=course.stripe-amount.d.ts.map