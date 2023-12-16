import React from 'react'
import '../style/Cart.css'
import { useCart } from '../context/Cart';
import {Link} from 'react-router-dom'
import { useAuth } from '../context/auth';

const CartPage = () => {
  const[cart, setCart] = useCart();
  const[auth] = useAuth();

  const removeCartItem =(cid)=> {
    try {
        let myCart = [...cart];
        let index = myCart.findIndex((item)=> item._id === cid);
        myCart.splice(index, 1);
        setCart(myCart);
        localStorage.setItem("cart", JSON.stringify(myCart));
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
  
  return (
    <div className='cart'>
      <div className='cart-product'>
        <div className='cart-delivery-adderss'>
            Deliver to
            <h5>ghhfijwj</h5>
            <h5>ghhfijwj</h5>
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
                  <div className='cart-p-price'>₹ {c.price}</div>
                  <button onClick={()=> removeCartItem(c._id)}>remove</button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className='cart-price'>
        <h2>Cart Summary</h2>
        <strong>Total | Checkout | Payment</strong>
        <hr />
        <p><strong>NOTE:-</strong>Safe and Secure Payments.Easy returns.100% Authentic products.</p>
        <hr />
        <h3>Total:- {totalPrice()}</h3>
      </div>
    </div>
  )
}

export default CartPage
