import "dotenv/config";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const pool = new Pool({
  connectionString:
    "postgresql://betalectic:Betalectic@localhost:5432/config_database?schema=public",
  // connectionString: process.env.DATABASE_URL,
  // host: process.env.DATABASE_HOST,
  // port: (process.env.DATABASE_POST as unknown as number) || 5432,
  // user: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE_NAME,
});

const db = drizzle(pool);

async function main() {
  console.log("MIGRATION STARTED..");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("MIGRATION FINIShed..");

  process.exit(0);
}

main().catch((err) => {
  console.log("err ===>", err);
  process.exit(0);
});
