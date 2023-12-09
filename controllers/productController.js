
export const ProductCreateController = async (req, res) => {
   try {
    
   } catch (error) {
    console.log(error);
    res.status(201).send({
        success: false,
        message: "Error Product Cannot Created"
    })
   }
}