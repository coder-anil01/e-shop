import productModel from "../models/productModel.js";

//*************  CREATE   *************//
export const productCreateController = async (req, res) => {
    try {
       const { title, description, image, category, price, countInStock, rating, numReviews, isFeatured } = req.body
       if( !title || !description || !image || !category || !price || !countInStock || !rating ){
        return res.status(404).send({error: "Plese fill the required field"})
       }
       const createProduct = await new productModel({title, description, image, category, price, countInStock, rating, numReviews, isFeatured}).save()
       res.status(201).send({
        success: true,
        message: "Product Created Successfully",
        createProduct,
       })
    
   } catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message: "Internal server error",
        error,
    })
   }
}

//*************  FETCH   *************//
export const getProductController = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.status(200).send({
            success: true,
            message: "All Product",
            counTotal: products.length,
            products,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message:"Internal server error",
            error,
        })
    }
}

//*************  UPDATE   *************//
export const updateProductController = async(req, res)=> {
    try {
        const{ id } = req.params
        const {title, description, image, category, price, countInStock, rating, numReviews, isFeatured} = req.body
        const updateProduct = await productModel.findByIdAndUpdate(id, {title, description, image, category, price, countInStock, rating, numReviews, isFeatured},
            {new: true})
        res.status(201).send({
            success: true,
            message: "Product Updated Successfully",
            updateProduct,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error,
        })
    }
}

//*************  DELETE   *************//
export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params
        const deleteProduct = await productModel.findByIdAndDelete(id)
        if(!deleteProduct){
            return res.status(404).send({error: "Product not found"})
        }
        res.status(200).send({
            success:true,
            message: "Product Deleted Successfully",
            deleteProduct,
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message: "Internal server error",
            error,
        })
    }
}
