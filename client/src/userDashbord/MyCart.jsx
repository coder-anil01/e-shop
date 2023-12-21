import React from 'react'
import UserMenu from './UserMenu'
import { useCart } from '../context/Cart';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';

const MyCart = () => {

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

  return (
    <>
    <div className='menu-h1'>My Dashbord</div>
    <div className='dashbord-main'>
      <div className='dashbord'>
        <div className='dashbord-menu'><UserMenu/></div>
        <div className='dashbord-contant'>
          <div>
          <div className='cart-delivery-adderss'>
            {cart?.length > 0  ? `${cart?.length} Item In Cart ${auth?.token ? "" : "Plese Login To CheckOut"} ` : "Card Is Empty"}
        </div>
        <Link to="/cart">Order</Link>
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
        </div>
      </div>
    </div>
  </>
  )
}

export default MyCart
