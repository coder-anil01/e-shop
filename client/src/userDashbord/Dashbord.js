import React from 'react'
import "../style/Dashbord.css"
import { NavLink } from 'react-router-dom'
import { FaUser,FaShoppingCart, FaHeart, FaCar } from "react-icons/fa";
import UserMenu from './UserMenu';

const Dashbord = () => {
  return (
    <>
      <div className='menu-h1'>My Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><UserMenu/></div>
          <div className='dashbord-contant'>My lorem666Order</div>
        </div>
      </div>
    </>
  )
}

export default Dashbord
