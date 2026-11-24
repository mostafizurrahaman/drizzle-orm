import { db } from "../../db/index.ts";
import {
  products,
  type TProductInsertType,
} from "../../db/schemas/product.schema.ts";

const createProduct = async () => {
  const productPayload: TProductInsertType = {
    title: "Black Bag",
    slug: "black_bag",
    description: "this is a black bag",
    price: "20.2",
    stockQuantity: 100,
    isFeatured: true,
  };

  const product = await db
    .insert(products)
    .values([productPayload])
    .returning();

  return product;
};

export const ProductServices = {
  createProduct,
};
