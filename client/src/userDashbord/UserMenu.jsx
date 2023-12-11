import React from 'react'
import "../style/Dashbord.css"
import { NavLink } from 'react-router-dom'
import { FaUser,FaShoppingCart, FaHeart, FaCar } from "react-icons/fa";

const UserMenu = () => {
  return (
    <div className='menu-left'>
      <NavLink to="/dashbord/user/profile" className="menu-m-button"><FaUser /> My Account</NavLink>
      <NavLink to="/dashbord/user/order" className="menu-m-button"><FaCar /> My Order</NavLink>
      <NavLink to="/dashbord/user/wishlist" className="menu-m-button"><FaHeart /> My Wishlist</NavLink>
      <NavLink to="/dashbord/user/cart" className="menu-m-button"><FaShoppingCart /> My Cart</NavLink>
    </div>
  )
}

export default UserMenu
