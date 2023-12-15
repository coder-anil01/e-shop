import React, { useEffect, useState } from 'react'
import "../style/ProductDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FaCartPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";


const ProductDetails = () => {

    const params = useParams();
    const[product, setProduct] = useState({})

// get all category
const getSingelProduct = async () => {
    try {
    const { data } = await axios.get(`http://localhost:8000/api/v1/product/get/${params.id}`);
    if (data.success) {
        setProduct(data.product)
        console.log(data.product)
    }
    } catch (error) {
    console.log(error);
    }
};
useEffect(()=> {
    getSingelProduct()
},[])

  return (
    <div className='product-details-body'>
      <div className='product-details'>
        <div className='p-d-left'>
            <img className='p-d-thumnail' src={product.image} alt="" />
            <button className='p-d-add-to-cart'><FaCartPlus /> ADD TO CART</button>
            <button className='p-d-buy-now'>BUY NOW</button>
        </div>
        <div>
            <div className='p-d-title'>{product.title}</div>
            <div className='p-d-price'>₹{product.price}/-</div>
            <div className='p-d-rating'>{product.rating} <FaRegStar/></div>
            <div className='p-d-delivery'>Free delivery</div>
            <div className='p-d-description'>{product.description}</div>
        </div>
      </div>
      SIMLER PRODUCT
    </div>
  )
}

export default ProductDetails
