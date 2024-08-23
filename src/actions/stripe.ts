import { stripe } from "@/lib/stripe";

type Props = {
  userId: string;
};

export const subscribeAction = async ({ userId }: Props) => {
  const { url } = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: "price_1Pr5UCE3NBMg1vGhlVDLmguN",
        quantity: 1,
      },
    ],
    metadata: {
      userId,
    },
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_URL}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}`,
  });

  return url;
};
