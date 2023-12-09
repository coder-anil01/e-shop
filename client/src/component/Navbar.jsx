import React from 'react'
import Navlogo from '../image/coder-anil-nav.png'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
            <img className='navbar-logo' src={Navlogo} alt="nav-logo" />
        </Link>
        <div className='navbar-items'>
            <NavLink to='/register' className='navbar-item'>
                Register
            </NavLink>
            <NavLink to='/login' className='navbar-item'>
                login
            </NavLink>
        </div>
      </div>
      <div className='navbar-buttom'></div>
    </div>
  )
}

export default Navbar
