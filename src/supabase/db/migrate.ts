import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const migrationClient = postgres(process.env.DB_CONNECTION_STRING as string, {
  max: 1,
});

const main = async () => {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "./src/supabase/db/migrations",
  });
  await migrationClient.end();
};

main();