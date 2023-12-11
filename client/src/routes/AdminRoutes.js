import { useEffect, useState } from 'react'
import { useAuth } from '../context/auth';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Spiner from '../component/spiner/Spiner';

export default function AdminRoute(){

const [ok, setOk] = useState(false )
  const [auth, setAuth]= useAuth()

  useEffect(()=>{
    const authCheck = async() =>{
      const res = await axios.get(`http://localhost:8000/api/v1/auth/admin-auth`);
      if(res.data.ok){
        setOk(true)
      }else{
        setOk(false)
      }
    };
    if(auth?.token) authCheck();
  }, [auth?.token]);
  console.log(ok)

  return ok ? <Outlet/> : <Spiner path=''/>
}