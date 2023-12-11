import React, { useState } from 'react';
import '../style/Register.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [answer, setAnswer] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(e)=> {
      e.preventDefault()
      try {
          const res = await axios.post('http://localhost:8000/api/v1/auth/forgot-password', {email, answer, newPassword})
          if(res.data.success){
            toast.success(res.data.message)
            navigate('/login')
          }else{
            toast.error(res.data.message)
          }
        } catch (error) {
          toast.error("Internal Server error")
        }
    }

  return (
    <div className="form-body">
      <form className="form-group" onSubmit={handleSubmit}>
      <h1 className='form-heading'>Forgot Password</h1>
        <input
          type="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter Your Email"
          required
        />
        <input
          type="text"
          value={answer}
          onChange={(e)=> setAnswer(e.target.value)}
          className="form-control"
          placeholder="Enter Your Password Hint"
          required
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e)=> setNewPassword(e.target.value)}
          className="form-control"
          placeholder="Create Password"
          required
        />
        <button type="submit" className="form-submit">RESET</button>
        <p className='form-link-m'>Don't have account <Link to="/register" className='form-link-s'>Create Account ?</Link></p>
        </form>
      </div>
  )
}

export default ForgotPassword
