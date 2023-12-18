import express from "express";
import { createOrder, getAllOrder } from "../controllers/orderController.js";



//router object
const router = express.Router();

router.post("/create", createOrder)

router.get("/get-all", getAllOrder)


export default router;