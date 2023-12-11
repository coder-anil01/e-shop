import express from "express";
import {
  forgotPasswordController,
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

//****** LOGIN *******/
router.post("/forgot-password", forgotPasswordController);

router.get("/test", requireSignIn, isAdmin, testController);

//user routes
router.get('/user-auth', requireSignIn, (req, res)=>{
  res.status(200).send({ok: true});
})

//Admin routes
router.get('/admin-auth', requireSignIn, isAdmin,(req, res)=>{
  res.status(200).send({ok: true});
})

export default router;
