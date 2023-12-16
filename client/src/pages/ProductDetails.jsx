import React, { useEffect, useState } from 'react'
import "../style/ProductDetails.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { FaCartPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";


const ProductDetails = () => {

    const params = useParams();
    const[product, setProduct] = useState({})
    const[relectedproduct, setReletedproduct] = useState([])

// get Product
const getSingelProduct = async () => {
    try {
    const { data } = await axios.get(`http://localhost:8000/api/v1/product/get/${params.id}`);
    if (data.success) {
        setProduct(data.product)
        reletedProduct(data?.product._id, data?.product.category._id)
    }
    } catch (error) {
    console.log(error);
    }
};

// releted Product
const reletedProduct = async (pid, cid) => {
    try {
    const { data } = await axios.get(`http://localhost:8000/api/v1/product/releted/${pid}/${cid}`);
    if (data.success) {
      setReletedproduct(data.reletedProduct)
      console.log(data.reletedProduct)
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
            <img className='p-d-thumnail' src={product.image} alt={product.title} />
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
      <h3>SIMLER PRODUCT</h3>

      {relectedproduct.length >= 1
      ? <div className='homepage-right'>
      {relectedproduct.map((p)=>(
        <Link to={`/product/${p._id}`} className='h-product-card' key={p._id}>
          <img className='h-Product-image' src={p.image} alt={p.title} />
          <div className='h-product-text'>
            <div className='h-product-ttle' >{p.title.slice(0, 15)}...</div>
            <div className='h-product-price' >₹ {p.price}/-</div>
            <div className='h-product-delivery' >Free Delivery</div>
          </div>
        </Link>
      ))}
    </div>
      : <h4>Have No Any Simmler Product</h4>
      }
      
    </div>
  )
}

export default ProductDetails
