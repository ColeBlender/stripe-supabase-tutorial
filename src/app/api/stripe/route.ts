import { stripe } from "@/lib/stripe";
import db from "@/supabase/db";
import { users } from "@/supabase/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = headers().get("Stripe-Signature") as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      "whsec_6ebd3ee570976f32bf0f2a6ce4293abeb5df228e3252a55881f32baf8f7a189a",
    );
  } catch (error) {
    console.error(error);
    return new NextResponse("webhook error", { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" &&
    event.data.object.payment_status === "paid"
  ) {
    const metadata = event.data.object.metadata;
    if (metadata) {
      const userId = metadata.userId;
      await db
        .update(users)
        .set({ isSubscribed: true })
        .where(eq(users.id, userId));
    }
  }

  revalidatePath("/", "layout");

  return new NextResponse(null, { status: 200 });
}
