import React, {useState} from 'react'
import '../style/Register.css'
import { toast } from "react-toastify";
import axios from 'axios'
import { useAuth } from '../context/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Whatshapp from '../component/Whatshapp';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const location = useLocation();
  const [auth, setAuth]= useAuth();

  const handleSubmit = async(e)=> {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/v1/auth/login', {email, password})
      if(res.data.success){
        toast.success(res.data.message)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        })
        localStorage.setItem('auth', JSON.stringify(res.data))
        navigate( location.state || '/')
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error("Internal server error")
    }
  }
  return (
      <div className="form-body">
      <form className="form-group" onSubmit={handleSubmit}>
      <h1 className='form-heading'>Login Page</h1>
        <input
          type="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter Your Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          className="form-control"
          placeholder="Create Password"
          required
        />
        <Link to="/forgot-password" className='form-link-s'>Forgot Password ?</Link>
        <button type="submit" className="form-submit">REGISTER</button>
        <p className='form-link-m'>Don't have account <Link to="/register" className='form-link-s'>Create Account ?</Link></p>
        </form>
        <Whatshapp/>
      </div>
  )
}

export default Login
