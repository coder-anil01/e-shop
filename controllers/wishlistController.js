import wishListModel from "../models/wishListModel.js";

export const createwishlist = async (req, res) => {
    try {
        const { user, product} = req.body;
        const wishlist = await new wishListModel({user, product}).save();
        res.status(201).send({
            success: true,
            message: "Added product to Wishlist",
            wishlist,
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message: "Internal Server Error",
            error,
        })
    }
}

export const userwishlist = async (req, res) => {
    try {
        const {id} = req.params;
        const wishlist = await wishListModel.find({"user": id}).populate('product').select("-user").sort({ createdAt: -1})
        res.status(200).send({
            success: true,
            message: "Get All wishlist",
            wishlist,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error,
        })
    }
}