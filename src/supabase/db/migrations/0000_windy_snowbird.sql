CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"is_subscribed" boolean DEFAULT false NOT NULL
);
