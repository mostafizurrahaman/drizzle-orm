import express from "express";
import { ProductController } from "./product.controllers.ts";

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({
    message: "Product Server is running now.",
  });
});

router.post("/", ProductController.createProduct);

export const productRoutes = router;
