import React from 'react'
import Navlogo from '../image/coder-anil-nav.png'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/auth'
import { toast } from "react-toastify";

const Navbar = () => {

  const [auth, setAuth] =  useAuth();
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
        </div>
      </div>
      <div className='navbar-buttom'></div>
    </div>
  )
}

export default Navbar
