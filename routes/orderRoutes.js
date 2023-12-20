import express from "express";
import { createOrder, getAllOrder, userAllOrders } from "../controllers/orderController.js";



//router object
const router = express.Router();

router.post("/create", createOrder)

router.get("/get-all", getAllOrder)

router.post("/user-order", userAllOrders)


export default router;