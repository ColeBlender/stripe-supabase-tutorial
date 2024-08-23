import { getUser } from "@/supabase/auth/server";
import Link from "next/link";
import SignOutButton from "./components/SignOutButton";

async function HomePage() {
  const user = await getUser();

  return (
    <div className="mt-20 text-center">
      {user ? (
        <SignOutButton />
      ) : (
        <Link
          href="/login"
          className="inline-block w-28 rounded-lg bg-slate-400 p-2 text-center text-white"
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default HomePage;
