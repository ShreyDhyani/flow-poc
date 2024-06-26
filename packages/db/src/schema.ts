import { date, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  first_name: varchar("first_name", { length: 256 }),
  last_name: varchar("last_name", { length: 256 }),
  phone: varchar("phone", { length: 256 }),
  email: varchar("email", { length: 256 }),
  created_at: date("created_at"),
  updated_at: date("updated_at"),
  deleted_at: date("deleted_at"),
});

export const tenant_configuration = pgTable("tenant_configuration", {
  id: serial("id").primaryKey(),
  tenant: varchar("tenant", { length: 256 }),
  identifier: varchar("identifier", { length: 256 }),
  value: varchar("value", { length: 256 }),
  config: varchar("config", { length: 256 }),
  created_at: date("created_at"),
  updated_at: date("updated_at"),
  deleted_at: date("deleted_at"),
});
