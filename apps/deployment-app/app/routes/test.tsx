import { db } from "db";

export async function loader() {
  console.log(">>> TRACKER 0");
  try {
    console.log(">>> TRACKER 1", db);

    const record = await db.query.tenant_configuration.findMany();
    console.log(">>> TRACKER 2");
    if (!record) {
      return null;
    }
    console.log(">>> TRACKER 3");

    return record;
  } catch (err) {
    console.error("Error fetching tenant configuration:", err);
    throw err;
  }
}
