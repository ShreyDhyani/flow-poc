CREATE TABLE IF NOT EXISTS "tenant_configuration" (
	"id" serial PRIMARY KEY NOT NULL,
	"tenant" varchar(256),
	"value" varchar(256),
	"config" varchar(256),
	"created_at" date,
	"updated_at" date,
	"deleted_at" date
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"phone" varchar(256),
	"email" varchar(256),
	"created_at" date,
	"updated_at" date,
	"deleted_at" date
);
