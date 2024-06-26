import { drizzle } from "drizzle-orm/node-postgres";
import pg_pkg from "pg";
const { Client } = pg_pkg;

import * as scheme from "./schema";

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://betalectic:Betalectic@localhost:5432/config_database?schema=public";

const client = new Client({ connectionString });

const db = drizzle(client, { schema: scheme });

export default db;
