import {
  boolean,
  integer,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const productStatusEnum = pgEnum("productStatus", ["active", "inactive"]);

const timestamps = {
  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  }).$onUpdate(() => new Date()),
};

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).unique("slug").notNull(),
  description: text("description"),
  price: numeric("price", {
    precision: 12,
    scale: 2,
  }).notNull(),
  stockQuantity: integer("stock_quantity").default(0).notNull(),
  isFeatured: boolean("is_featured").default(false).notNull(),
  status: productStatusEnum("status").default("active"),
  ...timestamps,
});

export type TProductInsertType = typeof products.$inferInsert;
