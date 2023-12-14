import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/auth'
import "../style/HomePage.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);

  //Get all Products
  const allProducts =async()=>{
    try {
      // const {data} = await axios.get("http://localhost:8000/api/v1/product/get")
      const {data} = await axios.get("/api/v1/product/get")
      console.log(data)
      setProducts(data.products)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    allProducts()
  },[])

  return (

    
    <>
    <div className='homepage'>
      <div className='homepage-left'>filter</div>
      <div className='homepage-right'>
        {products.map((p)=>(
          <Link to={``} className='h-product-card' key={p._id}>
            <img className='h-Product-image' src={p.image} alt={p.title} />
            <div className='h-product-text'>
              <div className='h-product-ttle' >{p.title.slice(0,15)}...</div>
              <div className='h-product-price' >₹ {p.price}/-</div>
              <div className='h-product-delivery' >Free Delivery</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export default HomePage
