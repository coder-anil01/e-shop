import React from 'react'
import UserMenu from './UserMenu'

const MyOrder = () => {
  return (
    <>
      <div className='menu-h1'>My Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><UserMenu/></div>
          <div className='dashbord-contant'>My Order</div>
        </div>
      </div>
    </>
  )
}

export default MyOrder
