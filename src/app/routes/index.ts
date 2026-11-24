import express from "express";
import { productRoutes } from "../module/products/product.route.ts";

const router = express.Router();

const routes = [
  {
    path: "/products",
    route: productRoutes,
  },
];

routes.forEach((r) => router.use(r.path, r.route));

export const allRoutes = router;
