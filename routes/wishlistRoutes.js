import express from "express";
import { createwishlist, userwishlist } from "../controllers/wishListController.js";

const router = express.Router();

router.post('/create', createwishlist);

router.post('/get/:id', userwishlist);

export default router;