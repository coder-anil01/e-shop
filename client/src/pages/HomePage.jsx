import React, { useEffect, useState } from 'react'
import "../style/HomePage.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Checkbox, Radio} from 'antd'
import { Prices } from '../component/Prices';
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Whatshapp from '../component/Whatshapp';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const[auth] = useAuth();

  //wishList Add
  const addWishlist = async(id) => {
    try {
      const {data} = await axios.post('http://localhost:8000/api/v1/wishlist/create', {user: auth?.user?._id, product: id})
      if(data?.success){
        toast.success(data?.message)
      }else{
        toast.warning(data.message)
      }
    } catch (error) {
      toast.error("Internal Server Error")
    }
  }

  //=> fetch categort
  const allCategory =async()=>{
    try {
      const {data} = await axios.get("http://localhost:8000/api/v1/category/get")
      setCategories(data.categories)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    allCategory()
  },[])

  //Get all Products
  const allProducts =async()=>{
    try {
      const {data} = await axios.get("http://localhost:8000/api/v1/product/get")
      // const {data} = await axios.get("/api/v1/product/get")
      setProducts(data.products)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    if(!checked.length && !radio.length) allProducts()
  },[checked.length, radio.length])


  //Filter Category
  const handleFilter = (value, id) => {
    let all = [ ...checked ];
    if(value){
      all.push(id);
    }else{
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  //get Filter product
  const filterProduct = async ()=>{
    try {
      const {data} = await axios.post(`http://localhost:8000/api/v1/product/filter`, {checked, radio})
      console.log(data?.products)
      setProducts(data?.products)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    if(checked.length || radio.length) filterProduct()
  },[checked, radio])


  return (
    <>
    <div className='homepage'>
      <div className='homepage-left'>
        <h3>Filter</h3>
        <div>
          <h4>Filter-Category</h4>
          {categories?.map((c) => (
            <Checkbox key={c._id} 
            className='h-checkbox'
            onChange={(e)=> handleFilter(e.target.checked, c._id)}>
              {c.name}
            </Checkbox>
          ))}
        </div>
        <div>
        <h4>Filter-Price</h4>
          <Radio.Group onChange={e => setRadio(e.target.value)}>
            {Prices?.map(p => (
              <div key={p._id}>
                <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>
        </div>
      </div>
      <div className='homepage-right'>
        {products.map((p)=>(
          <div className='h-product-card' key={p._id}>
            <Link to={`/product/${p._id}`}>
              <img className='h-Product-image' src={p.image} alt={p.title.slice(0, 5)} />
            </Link>
            <div className='h-product-text'>
              <div className='product-wish-cart'>
                <div onClick={()=> {addWishlist(p._id)}}><FaRegHeart/></div>
                <div><FaCartPlus/></div>
                </div>
              <div className='h-product-ttle' >{p.title.slice(0,15)}...</div>
              <div className='h-product-price' >₹ {p.price}/-</div>
              <div className='h-product-delivery' >Free Delivery</div>
            </div>
          </div>
        ))}
      </div>
      <Whatshapp/>
    </div>
    </>
  )
}

export default HomePage
