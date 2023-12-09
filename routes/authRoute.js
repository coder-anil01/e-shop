import express from "express";
import {
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//****** REGISTER *******/
router.post("/register", registerController);

//****** LOGIN *******/
router.post("/login", loginController);

router.get("/test", requireSignIn, isAdmin, testController);

export default router;
