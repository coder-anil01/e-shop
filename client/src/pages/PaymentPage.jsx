import React, { useState } from 'react'
import '../style/Cart.css'
import { useCart } from '../context/Cart';
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { Radio} from 'antd'


const PaymentPage = () => {

  const [value, setValue] = useState(1);
  const[cart, setCart] = useCart();
  const[auth] = useAuth();
  const navigate = useNavigate();
  const user = auth?.user;

  const totalPrice =()=> {
    try {
      let total = 0;
      cart?.map((e)=>{
        total = total + e.price;
      });
      return total
    } catch (error) {
      console.log(error)
    }
  }

  const placeOrder = ()=> {
    try {
      navigate('/dashbord/user/payment')
    } catch (error) {
      toast.error("Internal Server")
    }
  }

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  
  return (
    <div className='cart'>
      <div className='cart-product'>
        <div className='cart-delivery-adderss'>
          <div>
            <p><strong>Deliver In:- {user?.name}</strong></p>
            <p><FaPhone/> {user?.phone}</p>
            <p><FaLocationDot/> {user?.address}</p>
          </div>
          <Link className='cart-mid-button' to="/dashbord/user/profile">Change</Link>
        </div>

        <div className="cart-product-item">
            <h2>Payment Method</h2>
                <Radio.Group onChange={onChange} value={value} className='payment-method-item'>
                    <div><Radio value={1}>UPI</Radio></div>
                    <div><Radio value={2}>CARD</Radio></div>
                    <div><Radio value={3}>Net Banking</Radio></div>
                    <div><Radio value={4}>Cash On Delivery</Radio></div>
                </Radio.Group>
        </div>
        <button onClick={placeOrder} className='cart-place-order order-conform'>Conform Order</button>
      </div>
      <div>
      <div className='cart-price'>
        <h2>PRICE DETAILS</h2>
        <p><strong>Total | Checkout | Payment</strong></p>
        <div className='cart-delivery-adderss'>
          <div><h3>Total Amount:-</h3></div>
          <h3>₹ {totalPrice()}</h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PaymentPage
