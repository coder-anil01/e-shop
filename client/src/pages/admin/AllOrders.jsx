import React, { useEffect, useState } from 'react'
import AdminMenu from './AdminMenu'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {Select} from 'antd';
import moment from "moment";




const AllOrders = () => {
  
  const { Option } = Select;
  const [allOrders, setAllOrders] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const [status, setStatus] = useState("");
  
  const AllOrders = async()=>{
    try {
      const {data} = await axios.get(`http://localhost:8000/api/v1/order/get-all`);
      setTotalOrder(data?.total)
      setAllOrders(data?.order)
      setStatus(data?.order.status)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    AllOrders()
    // eslint-disable-next-line
  },[])


  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`http://localhost:8000/api/v1/order/update/${orderId}`, {status: value});
      toast.success(data?.message)
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  return (
    <>
      <div className='menu-h1'>Admin Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><AdminMenu/></div>
          <div className='dashbord-contant'>
          <h2 className='dashbord-main-heading'>All Orders:--  {totalOrder}</h2>
          {allOrders.map((c)=> (
              <div className='cart-product-item-card' key={c._id}>
                <div className='cart-product-item-left'>
                  <Link to={`/product/${c.products._id}`}>
                    <img className='cart-p-image' src={c.products.image} alt={c.products.title.slice(0,5)} />
                  </Link>
                </div>
                <div className='cart-product-item-right'>
                  <div className='cart-p-title'>{c.products.title.slice(0,20)}...</div>
                  <p className='cart-p-price'>₹ {c.price}</p>
                  <p>{moment(c.createdAt).fromNow()}</p>
                    <Select
                    style={{with: "200px"}}
                      onChange={(value) => handleChange(c._id, value)}
                      defaultValue={c?.status}>
                      <Option value="Shipped">Shipped</Option>
                      <Option value="Processing">Processing</Option>
                      <Option value="Out Of Delivery">Out Of Delivery</Option>
                      <Option value="Delivered">delivered</Option>
                      <Option value="Out Of Stock">Out Of Stock</Option>
                      <Option value="pending">pending</Option>
                      <Option value="Cancelled">Cancelled</Option>
                      <Option value="Refunded">Refunded</Option>
                    </Select>
                </div>
                <div>
                  <div>Name:- {c.user.name}</div>
                  <div>Phone:- {c.user.phone}</div>
                  <div>Address:- {c.user.address}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllOrders
