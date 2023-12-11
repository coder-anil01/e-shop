import React, { useEffect, useState } from 'react'
import AdminMenu from './AdminMenu'
import axios from 'axios'

const Products = () => {
  const [data, setData] = useState("")
  const [total, setTotal] = useState(0)

  const allProducts =async()=>{
    try {
      const res = await axios.get("http://localhost:8000/api/v1/product/get")
      console.log(res.data)
      setData(res.data.products)
      setTotal(res.data.counTotal)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    allProducts()
  },[])

  return (
    <>
      <div className='menu-h1'>Admin Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><AdminMenu/></div>
          <div className='dashbord-product'>
          <h2>Total products :-- {total} </h2>
          <div className="dashbord-product-item">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <div className='dashbord-product-card' key={index}>
                  <img className='product-image-a' src={item.image} alt={item.title} />
                  <div className='product-title-a'>{item.title}</div>
                </div>
              ))
              ) : (
                <p>No User Available</p>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
