import React from 'react'
import "../style/Dashbord.css"
import { NavLink } from 'react-router-dom'
import { FaEdit,FaCartPlus, FaHeart, FaCar } from "react-icons/fa";
import { ImExit } from "react-icons/im";


const UserMenu = () => {
  return (
    <div className='menu-left'>
      <NavLink to="/dashbord/user/profile" className="menu-m-button"><FaEdit /> My Account</NavLink>
      <NavLink to="/dashbord/user/order" className="menu-m-button"><FaCar /> My Order</NavLink>
      <NavLink to="/dashbord/user/wishlist" className="menu-m-button"><FaHeart /> My Wishlist</NavLink>
      <NavLink to="/dashbord/user/cart" className="menu-m-button"><FaCartPlus /> My Cart</NavLink>
      <NavLink to="/dashbord/user/logout" className="menu-m-button"><ImExit /> Logout</NavLink>
    </div>
  )
}

export default UserMenu
