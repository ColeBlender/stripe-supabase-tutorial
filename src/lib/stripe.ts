import Stripe from "stripe";

const key = "sk_test_yourKey";

export const stripe = new Stripe(key, {
  apiVersion: "2024-06-20",
  typescript: true,
});
