"use client";

import { signOutAction } from "@/actions/auth";

function SignOutButton() {
  return (
    <button
      onClick={() => signOutAction()}
      className="w-28 rounded-lg bg-slate-400 p-2 text-white"
    >
      Sign Out
    </button>
  );
}

export default SignOutButton;
