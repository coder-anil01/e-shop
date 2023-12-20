import orderModel from "../models/orderModel.js";

//*************  CREATE   *************//
export const createOrder = async(req, res) => {
    try {
        const {cart, price, id} = req.body;
        const order = await new orderModel({products: cart, price, user: id }).save();
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

//*************  GET user All Orders   *************//
export const userAllOrders = async(req, res)=>{
    try {
        const {id} = req.body
        if(!id){
            return res.status(404).send("plese enter user id")
        }
        const orders = await orderModel.findOne({user: id}).populate("products").sort({ createdAt: -1});
        res.status(200).send({
            success: true,
            message: "User All Order",
            totalOrders: orders.length,
            orders,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error While Registation",
            error,
          });
    }
}