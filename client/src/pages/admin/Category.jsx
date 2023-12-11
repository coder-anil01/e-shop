import React, { useEffect, useState } from 'react'
import AdminMenu from './AdminMenu'
import axios from 'axios'

const Category = () => {

  const [data, setData] = useState("")
  const [total, setTotal] = useState(0)

  const allCategory =async()=>{
    try {
      const res = await axios.get("http://localhost:8000/api/v1/category/get")
      setData(res.data.categories)
      setTotal(res.data.countTotal)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    allCategory()
  },[])
  return (
    <>
      <div className='menu-h1'>Admin Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><AdminMenu/></div>
          <div className='dashbord-contant'>
          <h2>All categories :-- {total} </h2>
          {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <div className='user-container' key={index}>
                  <div>{item.name}</div><div>{item.email}</div><div>{item.phone}</div><div>{item.address}</div>
                </div>
              ))
            ) : (
              <p>No categories Available</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Category
