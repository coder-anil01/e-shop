import React, { useEffect, useState } from 'react'
import AdminMenu from './AdminMenu'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Modal } from 'antd';

const Category = () => {

  const [data, setData] = useState("");
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [open, setOpen] = useState(false);
  const [select, setSelected] = useState(null);

//=> fetch categort
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

//=>  Create Category
  const handleCreate = async(e)=> {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/v1/category/create', {name})
      if(res.data.success){
        allCategory();
        toast.success(`${name} is Created`);
        setName('')
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error("Interal Server Error")
    }
  }

// Delete
  const handleDelete = async(id)=> {
    try {
      const res = await axios.delete(`http://localhost:8000/api/v1/category/delete/${id}`)
      if(res.data.success){
        toast.success(res.data.message)
        allCategory();
      }
      } catch (error) {
      toast.error("Interal Server Error")
    }
  }

  //Update
  const handleUpdated = async (e)=> {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:8000/api/v1/category/update/${select}`, {name: updateName})
      if(res.data.success){
        setOpen(false)
        allCategory();
        toast.success(res.data.message)
        setSelected(null)
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      toast.error("Interal Server Error")
    }
  }

  return (
    <>
      <div className='menu-h1'>Admin Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><AdminMenu/></div>
          <div className='dashbord-contant'>
{/* CREATE CATEGORY */}
        <div>
          <h2>Create Category</h2>
          <form onSubmit={handleCreate}>
            <input type="text"
            className='create-category-input'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder='Create Category'
            required
            />
            <button className='form-submit create-category-button' type='submit'>Create</button>
          </form>
        </div>

{/* SHOW ALL CATEGORTY */}
          <h2 className='dashbord-main-heading'>All categories :-- {total} </h2>
          {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <div className='user-container category-item' key={index}>
                  <div>{item.name}</div>
                  <div onClick={() => {setOpen(true); setUpdateName(item.name); setSelected(item._id)}} className='category-icon'><FaEdit/></div>
                  <div onClick={() =>{handleDelete(item._id)}} className='category-icon'><MdDeleteForever/></div>
                </div>
              ))
            ) : (
              <p>No categories Available</p>
            )}

            <Modal onCancel={()=> setOpen(false)}
              open={open}
              footer={null}>
              <form onSubmit={handleUpdated}>
              <input type="text"
              className='create-category-input'
              value={updateName}
              onChange={(e)=> setUpdateName(e.target.value)}
              placeholder='Update Category'
              required
              />
              <button className='form-submit create-category-button' type='submit'>Update</button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category
