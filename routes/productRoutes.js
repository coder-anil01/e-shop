import express from "express";
import { deleteProductController, getProductController, getSingleProductController, productCreateController, updateProductController } from "../controllers/productController.js";

const router = express.Router();


router.post('/create', productCreateController)

router.get('/get', getProductController)

router.get('/get/:id', getSingleProductController)

router.put('/update/:id', updateProductController)

router.delete('/delete/:id', deleteProductController)

export default router