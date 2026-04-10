/**
 * Course.priceAmount is major currency (may be fractional, e.g. 99.99).
 * Stripe needs integer minor units — use Math.round(major × 100) for 2-decimal currencies.
 */

const ZERO_DECIMAL_CURRENCIES = new Set([
  "bif",
  "clp",
  "djf",
  "gnf",
  "jpy",
  "kmf",
  "krw",
  "mga",
  "pyg",
  "rwf",
  "ugx",
  "vnd",
  "vuv",
  "xaf",
  "xof",
  "xpf",
]);

/** Major units (DB, float-safe) → Stripe unit_amount / Checkout line item. */
export function coursePriceToStripeMinorUnits(majorUnits: number, currency: string): number {
  const c = currency.toLowerCase();
  if (ZERO_DECIMAL_CURRENCIES.has(c)) {
    return Math.round(majorUnits);
  }
  return Math.round(majorUnits * 100);
}
