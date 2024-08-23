import Stripe from "stripe";

const key =
  "sk_test_51Pr58nE3NBMg1vGhA2MLFDwrjcRe66szhMBFtmu5UHaTYrOG9TuFLQwzjzW9t9ryChPGHFAgigkLKtd3Qcc5hDAS00LtEfCW4E";

export const stripe = new Stripe(key, {
  apiVersion: "2024-06-20",
  typescript: true,
});
