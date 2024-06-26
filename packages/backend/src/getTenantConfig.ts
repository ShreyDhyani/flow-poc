import { db } from "db";

async function getTenantConfig(tenant: string, config: string) {
  try {
    const record = await db.query.tenant_configuration.findMany();
    if (!record) {
      return null;
    }

    return record;
  } catch (err) {
    console.error("Error fetching tenant configuration:", err);
    throw err;
  }
}

export async function handleGetConfig(req: any, res: any) {
  // const { tenant, config } = req.query;

  // if (!tenant || !config) {
  //   return res.status(400).json({ message: "Missing required parameters" });
  // }

  const record = await getTenantConfig("", "");

  if (record) {
    return res.json(record);
  } else {
    return res.status(404).json({ message: "Configuration not found" });
  }
}
