import orderModel from "../models/orderModel.js";

//*************  CREATE   *************//
export const createOrder = async(req, res) => {
    try {
        const {cart, price, user} = req.body;
        const order = await new orderModel({products: cart, price, user: user._id }).save();
        res.status(201).send({
            success: true,
            message: "congratulations Order Conform",
            order,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error While Registation",
            error,
          });
    }
}

//*************  GET   *************//
export const getAllOrder = async(req, res) => {
    try {
        const order = await orderModel.find({})
        res.status(201).send({
            success: true,
            message: "All Orders",
            order,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error While Registation",
            error,
          });
    }
}