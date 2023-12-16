import React from 'react'
import Navlogo from '../image/coder-anil-nav.png'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/auth'
import { toast } from "react-toastify";
import SearchInput from './SearchInput';
import { FaCartArrowDown } from "react-icons/fa";
import { useCart } from '../context/Cart';
import { Badge } from 'antd';

const Navbar = () => {

  const [auth, setAuth] =  useAuth();
  const [cart] = useCart();
  const navigate = useNavigate()

  // handleLogout
  const handleLogout =()=> {
    try {
      setAuth({
        ...auth, user: null, token: ""
      })
      localStorage.removeItem("auth");
      navigate('/login')
      toast.success("Logout Successfully")
    } catch (error) {
      toast.error("Somthing went wrong")
    }
    
  }

  return (
    <div>
      <div className="navbar">
        <Link to="/">
            <img className='navbar-logo' src={Navlogo} alt="nav-logo" />
        </Link>
        <div className='navbar-items'>
          <SearchInput/>
          
          <NavLink to='/cart' className='navbar-item'>
          <FaCartArrowDown /> <Badge className='navbar-cart-badge' count={cart?.length} showZero></Badge>
            </NavLink>
            
            {!auth?.user ? (<>
              <NavLink to='/register' className='navbar-item'>
                Register
            </NavLink>
            <NavLink to='/login' className='navbar-item'>
                Login
            </NavLink>
            </>) : (<>
              <div onClick={handleLogout} className='navbar-item' style={{cursor:"pointer"}}>
                Logout
            </div></>)}
            <NavLink to={`/dashbord/${auth?.user?.role === 8987 ? "admin" : "user"}`} className='navbar-item'>{auth?.user?.name}</NavLink>
        </div>
      </div>
      <div className='navbar-buttom'></div>
    </div>
  )
}

export default Navbar
