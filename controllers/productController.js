
export const ProductCreateController = async (req, res) => {
    const { title, description, image, category, price, countInStock, rating, numReviews, isFeatured } = req.body
   try {
    
   } catch (error) {
    console.log(error);
    res.status(201).send({
        success: false,
        message: "Error Product Cannot Created"
    })
   }
}