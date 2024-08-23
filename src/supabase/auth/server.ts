import { createSupabaseClient } from "../server";
import db from "../db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import { User } from "@/lib/types";

export function getAuth() {
  const { auth } = createSupabaseClient();
  return auth;
}

export const getUser = async () => {
  const auth = getAuth();
  const authUser = (await auth.getUser()).data.user;
  if (!authUser) return null;

  const dbUser = await db.query.users.findFirst({
    where: eq(users.id, authUser.id),
  });
  if (!dbUser) return null;

  const user: User = {
    ...authUser,
    ...dbUser,
  };

  return user;
};

export async function protectRoute(returnUser: "returnUser"): Promise<User>;
export async function protectRoute(returnUser?: undefined): Promise<void>;
export async function protectRoute(
  returnUser?: "returnUser"
): Promise<User | void> {
  const auth = getAuth();
  const authUser = (await auth.getUser()).data.user;
  if (!authUser) throw new Error("Unauthorized");

  if (returnUser) {
    const dbUser = await db.query.users.findFirst({
      where: eq(users.id, authUser.id),
    });
    if (!dbUser) throw new Error("Unauthorized");

    const user: User = {
      ...authUser,
      ...dbUser,
    };

    return user;
  }
}
