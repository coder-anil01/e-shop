import React, { useState } from "react";
import '../style/Register.css'
import { toast } from "react-toastify";
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");


  const handleSubmit = async(e)=> {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/v1/auth/register', {name, email, password, phone, address, answer})
      if(res.data.success){
        toast.success(res.data.message)
        navigate('/login')
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error('Internal server error')
      
    }

  }
  return (
    <div className="form-body">
      <form className="form-group" onSubmit={handleSubmit}>
      <h1 className='form-heading'>Register Form</h1>
        <input
          type="text"
          value={name}
          onChange={(e)=> setName(e.target.value)}
          className="form-control"
          placeholder="Enter Your Name"
          required
        />
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
        <input
          type="text"
          value={answer}
          onChange={(e)=> setAnswer(e.target.value)}
          className="form-control"
          placeholder="Enter Password Hint"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={(e)=> setPhone(e.target.value)}
          className="form-control"
          placeholder="Enter Your Number"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e)=> setAddress(e.target.value)}
          className="form-control"
          placeholder="Enter Your Address"
          required
        />
        <button type="submit" className="form-submit">REGISTER</button>
        <p className='form-link-m'>Have a account <Link to="/login" className='form-link-s'>Login ?</Link></p>
        </form>
      </div>
  );
};

export default Register;
