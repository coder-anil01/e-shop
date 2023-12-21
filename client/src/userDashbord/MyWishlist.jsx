import React, { useEffect, useState } from 'react'
import UserMenu from './UserMenu'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { FaCartPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


const MyWishlist = () => {

  const[ products, setProducts ] = useState([]);
  const [auth] = useAuth();
  const id = auth?.user?._id

  const wishlist = async()=>{
    const {data} = await axios.post(`http://localhost:8000/api/v1/wishlist/get/${id}`)
    console.log(data.wishlist)
    setProducts(data?.wishlist);
  }
  useEffect(()=>{
    wishlist();
  },[])
  return (
    <>
    <div className='menu-h1'>My Dashbord</div>
    <div className='dashbord-main'>
      <div className='dashbord'>
        <div className='dashbord-menu'><UserMenu/></div>
        <div className='dashbord-contant'>
        <div className='homepage-right'>
        {products.map((p)=>(
          <div className='h-product-card' key={p.product_id}>
            <Link to={`/product/${p.product_id}`}>
              <img className='h-Product-image' src={p.product.image} alt={p.product.title.slice(0, 5)} />
            </Link>
            <div className='h-product-text'>
              <div><FaCartPlus/> <MdDeleteForever/></div>
              <div className='h-product-ttle' >{p.product.title.slice(0,15)}...</div>
              <div className='h-product-price' >₹ {p.product.price}/-</div>
              <div className='h-product-delivery' >Free Delivery</div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default MyWishlist
