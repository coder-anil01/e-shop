import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

//*************  REGISTATION   *************//
export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, phone, answer } = req.body;
    //Validation
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }
    if (!phone) {
      return res.send({ error: "Phone is Required" });
    }
    if (!address) {
      return res.send({ error: "Address is Required" });
    }
    if (!answer) {
      return res.send({ error: "Hint is Required" });
    }
    //***=> ExistingUser
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Alredy Registered User",
      });
    }
    //***=> Register User
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      address,
      password: hashedPassword,
      phone,
      answer,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Registation",
      error,
    });
  }
};


//*************  LOGIN   *************//
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //***=> Validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Plese Enter Email or Password",
      });
    }
    //***=> Check User
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not Registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Inviled Password",
      });
    }
    //***=> Token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Login",
      error,
    });
  }
};

export const testController = async (req, res) => {
  res.status(200).send({
    success: true,
    message: "Test controller",
  });
};


//*************  FORGOT - PASSWORD   *************//
export const forgotPasswordController = async (req, res)=> {
  try {
    const {email, answer, newPassword} = req.body
    const user = await userModel.findOne({email, answer})
    if(!user){
      return res.status(200).send({message: "Somthing went wrong"})
    }
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, {password: hashed})
    res.status(200).send({
      success: true,
      message: "Password Forgot Successfully"
    })
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Internal Server Error"
    })
  }
}


//*************  GET ALL USERS   *************//
export const getAllUserController = async(req, res)=>{
  try {
    const role = 0
    const allUsers = await userModel.find({role})
    if(!allUsers){
      return res.status(404).send({message: "Don't have any account"})
    }
    res.status(200).send({
      message: "Get All User",
      counTotal: allUsers.length,
      allUsers,
    })
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Internal Server Error",
      error,
    })
  }
}

//*************  GET ALL ADMIN   *************//
export const getAllAdminController = async(req, res)=>{
  try {
    const role = 8987
    const allAdmin = await userModel.find({role})
    if(!allAdmin){
      return res.status(404).send({message: "Don't have any account"})
    }
    res.status(200).send({
      message: "Get All User",
      countTotal: allAdmin.length,
      allAdmin,
    })
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Internal Server Error",
      error,
    })
  }
}