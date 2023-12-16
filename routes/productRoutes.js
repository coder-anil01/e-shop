import express from "express";
import {
  deleteProductController,
  filterProductConteroller,
  getProductController,
  getSingleProductController,
  productCreateController,
  reletedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/create", productCreateController);

router.get("/get", getProductController);

router.get("/get/:id", getSingleProductController);

router.get("/search/:keyword", searchProductController);

router.get("/releted/:pid/:cid", reletedProductController);

router.post("/filter", filterProductConteroller);

router.put("/update/:id", updateProductController);

router.delete("/delete/:id", deleteProductController);

export default router;
