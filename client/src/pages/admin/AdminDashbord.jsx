import React from 'react'
import AdminMenu from './AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashbord = () => {
  
  const [auth] = useAuth()
  return (
    <>
      <div className='menu-h1'>Admin Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><AdminMenu/></div>
          <div className='dashbord-contant'>
          <h2 className='dashbord-main-heading'>My Account</h2>
          <div className='admin-account-container'>
            <p>Name:- {auth?.user.name}</p>
            <p>Email:- {auth?.user.email}</p>
            <p>Phone:- {auth?.user.phone}</p>
            <p>Address:- {auth?.user.address}</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashbord
