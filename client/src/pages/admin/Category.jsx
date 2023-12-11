import React from 'react'
import AdminMenu from './AdminMenu'

const Category = () => {
  return (
    <>
      <div className='menu-h1'>Admin Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><AdminMenu/></div>
          <div className='dashbord-contant'>My Category</div>
        </div>
      </div>
    </>
  )
}

export default Category
