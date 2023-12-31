import React from 'react'
import '../style/Cart.css'
import { useCart } from '../context/Cart';
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import { FaLocationDot, FaPhone } from "react-icons/fa6";


const CartPage = () => {
  const[cart, setCart] = useCart();
  const[auth] = useAuth();
  const navigate = useNavigate();
  const user = auth?.user;

  const removeCartItem =(cid)=> {
    try {
        let myCart = [...cart];
        let index = myCart.findIndex((item)=> item._id === cid);
        myCart.splice(index, 1);
        setCart(myCart);
        localStorage.setItem("cart", JSON.stringify(myCart));
        toast.info("Item Removed In Cart")
    } catch (error) {
        console.log(error)
    }
  }

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

        <div className='cart-delivery-adderss'>
            {cart?.length > 0  ? `${cart?.length} Item In Cart ${auth?.token ? "" : "Plese Login To CheckOut"} ` : "Card Is Empty"}
        </div>
        <div className="cart-product-item">
            {cart.map((c)=> (
              <div className='cart-product-item-card' key={c._id}>
                <div className='cart-product-item-left'>
                  <Link to={`/product/${c._id}`}>
                    <img className='cart-p-image' src={c.image} alt={c.title} />
                  </Link>
                </div>
                <div className='cart-product-item-right'>
                  <div className='cart-p-title'>{c.title.slice(0, 30)}...</div>
                  <p className='cart-p-price'>₹ {c.price}</p>
                  <div className='cart-mid-button' onClick={()=> removeCartItem(c._id)}>remove</div>
                </div>
              </div>
            ))}
        </div>
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
        <button onClick={placeOrder} className='cart-place-order'>Place Order</button>
      </div>
    </div>
  )
}

export default CartPage
