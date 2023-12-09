import React, {useState} from 'react'
import '../style/Register.css'
import { toast } from "react-toastify";
import axios from 'axios'
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
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
        navigate('/')
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
<p>anil@gmail.com</p>
<p>12345</p>
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

        <button type="submit" className="form-submit">REGISTER</button>
        </form>
      </div>
  )
}

export default Login
