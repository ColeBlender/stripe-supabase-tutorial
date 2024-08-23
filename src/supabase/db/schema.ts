import { boolean, pgTable, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  isSubscribed: boolean("is_subscribed").notNull().default(false),
});

export type DBUser = typeof users.$inferSelect;
