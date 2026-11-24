import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import configs from "../configs/index.ts";
import * as schema from "./schemas/index.ts";

const pool = new Pool({
  connectionString: configs.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

export const db = drizzle({
  client: pool,
  // relations
});
