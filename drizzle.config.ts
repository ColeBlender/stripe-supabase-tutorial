import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/supabase/db/schema.ts",
  out: "./src/supabase/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
  },
});
