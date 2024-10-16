import { Router } from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/product.controllers.js";

const router = Router();

router.post("/products", createProduct);
router.post("/products", getProducts);

export default router;
