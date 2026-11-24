import { defineConfig } from "drizzle-kit";

import configs from "./src/app/configs/index.ts";
export default defineConfig({
  out: "./drizzle",
  schema: "./src/app/db/schemas/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: configs.DATABASE_URL!,
  },
});
