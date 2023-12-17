import React from 'react'
import "../style/Dashbord.css"
import UserMenu from './UserMenu';
import { useAuth } from '../context/auth';

const Dashbord = () => {

  const [auth] = useAuth();
  const user = auth.user;

  return (
    <>
      <div className='menu-h1'>My Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><UserMenu/></div>
          <div className='dashbord-contant'>
            <h1> <strong>Hi {user.name},</strong></h1>
            <h3>Emaill:- {user.email}</h3>
            <h3>Phone:- {user.phone}</h3>
            <h3>Address:- {user.address}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashbord
