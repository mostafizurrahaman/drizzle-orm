import type { NextFunction, Response, Request } from "express";
import { ProductServices } from "./product.services.ts";

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = await ProductServices.createProduct();

    res.status(201).json({
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const ProductController = {
  createProduct,
};
