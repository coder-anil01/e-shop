import React, { useEffect, useState } from 'react'
import AdminMenu from './AdminMenu'
import axios from 'axios'

const AdminAccount = () => {

  const [ data, setData] = useState("")
  const [total, setTotal] = useState(0)

  const fetchData = async()=>{
    const res = await axios.get('http://localhost:8000/api/v1/auth/get-alladmin')
    setTotal(res.data.countTotal)
    setData(res.data.allAdmin)
  }
  
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <div className='menu-h1'>Admin Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><AdminMenu/></div>
          <div className='dashbord-contant'>
          <div className='dashbord-contant'>
            <h2 className='dashbord-main-heading'>All Admin Account :-- {total} </h2>
            <div className="user-container-h">
              <div>NAME</div>
              <div>EMAIL</div>
              <div>PHONE</div>
              <div>ADDRESS</div>
            </div>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <div className='user-container' key={index}>
                  <div>{item.name}</div><div>{item.email}</div><div>{item.phone}</div><div>{item.address}</div>
                </div>
              ))
            ) : (
              <p>No Admin Available</p>
            )}
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminAccount
