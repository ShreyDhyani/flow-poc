import { Config, defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./drizzle",
  // dialect: "pg",
  dialect: "sqlite",
  driver: "d1-http",
  // dbCredentials: {
  //   host: process.env.DB_HOST,
  //   user: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  // },
}) satisfies Config;
