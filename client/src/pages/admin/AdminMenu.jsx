import React from 'react'
import { FaUser, FaUsers, FaCartPlus, FaLayerGroup, FaWineBottle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const AdminMenu = () => {
  return (
    <div className='menu-left'>
      <NavLink to="/dashbord/admin/profile" className="menu-m-button"><FaUser /> Admin Account</NavLink>
      <NavLink to="/dashbord/admin/users" className="menu-m-button"><FaUsers /> All Users</NavLink>
      <NavLink to="/dashbord/admin/orders" className="menu-m-button"><FaCartPlus /> All Orders</NavLink>
      <NavLink to="/dashbord/admin/category" className="menu-m-button"><FaLayerGroup /> Category</NavLink>
      <NavLink to="/dashbord/admin/products" className="menu-m-button"><FaWineBottle /> Product</NavLink>
    </div>
  )
}

export default AdminMenu
