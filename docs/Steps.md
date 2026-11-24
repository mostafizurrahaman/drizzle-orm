# Setup Drizzle ORM:

## 1. Install Drizzle Orm:

```cmd
npm install drizzle-orm@rc
npm install  @neondatabase/serverless // If need transaction use with pool
npm install -D drizzle-kit@rc // for drizzle studio.
```

## 2. Create Drizzle Folder Inside App:

```ts
import { Pool } from "@neondatabase/serverless"; // neon db serverless
import { drizzle } from "drizzle-orm/neon-serverless"; // drizzle orm neon-serverless

// create a pool request for db connect
const pool = new Pool({
  connectionString: configs.DATABASE_URL,
});

// create drizzle db client from the  pool
export const db = drizzle({
  client: pool,
});
```
