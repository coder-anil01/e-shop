import express from "express";
import { deleteProductController, getProductController, productCreateController, updateProductController } from "../controllers/productController.js";

const router = express.Router();


router.post('/create', productCreateController)

router.get('/get', getProductController)

router.put('/update/:id', updateProductController)

router.delete('/delete/:id', deleteProductController)

export default router