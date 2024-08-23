"use client";

import { subscribeAction } from "@/actions/stripe";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type Props = {
  userId: string;
};

function SubscribeButton({ userId }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClickSubscribeButton = async () => {
    startTransition(async () => {
      const url = await subscribeAction({ userId });
      if (url) {
        router.push(url);
      } else {
        console.error("Failed to create subscription session");
      }
    });
  };

  return (
    <button
      disabled={isPending}
      onClick={handleClickSubscribeButton}
      className="inline-block w-28 rounded-lg bg-slate-400 p-2 text-center text-white"
    >
      Subscribe
    </button>
  );
}

export default SubscribeButton;
