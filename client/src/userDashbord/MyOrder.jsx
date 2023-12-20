import React, { useEffect, useState } from 'react'
import UserMenu from './UserMenu'
import { useAuth } from '../context/auth'
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyOrder = () => {

  const [auth] = useAuth();
  const [orders, setOrders] = useState([]);

  const AllOrders = async()=>{
    try {
      const {data} = await axios.post(`http://localhost:8000/api/v1/order/user-order`, {id: auth?.user?._id});
      setOrders(data?.orders)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    AllOrders()
  },[auth])
  return (
    <>
      <div className='menu-h1'>My Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><UserMenu/></div>
          <div className='dashbord-contant'>
          <h2>All Orders {orders.length}</h2>
        <div className="cart-product-item">
            {orders.map((c)=> (
              <div className='cart-product-item-card' key={c.products._id}>
                <div className='cart-product-item-left'>
                  <Link to={`/product/${c.products._id}`}>
                    <img className='cart-p-image' src={c.products.image} alt={c.products.title} />
                  </Link>
                </div>
                <div className='cart-product-item-right'>
                  <div className='cart-p-title'>{c.products.title}...</div>
                  <p className='cart-p-price'>₹ {c.price}</p>
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

export default MyOrder
