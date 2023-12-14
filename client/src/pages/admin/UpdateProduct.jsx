import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminMenu from './AdminMenu'
import axios from 'axios';
import { toast } from "react-toastify";

const UpdateProduct = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState([])
    const [ description,setDescription ] = useState([])
    const [ image, setImage ] = useState([])
    const [ category, setCategory ] = useState([])
    const [ price, setPrice ] = useState([])
    const [ countInStock, setCountInStock ] = useState([])
    const [ rating, setRating ] = useState([])
    const [ numReviews, setNumReviews ] = useState([])
    const [ isFeatured, setIsFeatured ] = useState([])

// get all category
    const getSingelProduct = async () => {
        try {
        const { data } = await axios.get(`http://localhost:8000/api/v1/product/get/${params.id}`);
        if (data?.success) {
          const product = data.product
          setTitle(product.title)
          setDescription(product.description)
          setImage(product.image)
          setCategory(product.category)
          setPrice(product.price)
          setCountInStock(product.countInStock)
          setRating(product.rating)
          setNumReviews(product.numReviews)
          setIsFeatured(product.isFeatured)
        }
        } catch (error) {
        console.log(error);
        }
    };
    
    useEffect(() => {
      getSingelProduct();
    }, []);
    
// Update Product
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try {
        const {data} = await axios.put(`http://localhost:8000/api/v1/product/update/${params.id}`, {title, description, image, category, price, countInStock, rating, numReviews, isFeatured})
        console.log(data);
        if (data?.success) {
        }  } catch (error) {
        console.log(error)
        }
    }
    
    const handleDelete = async ()=> {
      try {
        alert("you want to delete this Product")
        const {data} = await axios.delete(`http://localhost:8000/api/v1/product/delete/${params.id}`)
        toast.success(data.message)
        navigate('/dashbord/admin/products')
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <>
      <div className='menu-h1'>Admin Dashbord</div>
      <div className='dashbord-main'>
        <div className='dashbord'>
          <div className='dashbord-menu'><AdminMenu/></div>
          <div className='dashbord-contant'>
            <h2 className='dashbord-main-heading'>Update Product</h2>
{/* Update */}
            <form className="form-group" onSubmit={handleSubmit}>
              
                    <input
                    type="text"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    className="form-control"
                    placeholder="Enter Title"
                    required
                    />
                    <input
                    type="text"
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    className="form-control"
                    placeholder="Enter Description"
                    required
                    />
                    <input
                    type="text"
                    value={image}
                    onChange={(e)=> setImage(e.target.value)}
                    className="form-control"
                    placeholder="Enter Image Url"
                    required
                    />
                    <input
                    type="text"
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)}
                    className="form-control"
                    placeholder="Enter Price"
                    required
                    />
                    <input
                    type="text"
                    value={countInStock}
                    onChange={(e)=> setCountInStock(e.target.value)}
                    className="form-control"
                    placeholder="Enter Count In Stock"
                    required
                    />
                    <input
                    type="text"
                    value={rating}
                    onChange={(e)=> setRating(e.target.value)}
                    className="form-control"
                    placeholder="Enter Rating"
                    required
                    />
                    <input
                    type="text"
                    value={numReviews}
                    onChange={(e)=> setNumReviews(e.target.value)}
                    className="form-control"
                    placeholder="Enter Num Reviews"
                    required
                    />
                    <input
                    type="isFeatured"
                    value={isFeatured}
                    onChange={(e)=> setIsFeatured(e.target.value)}
                    className="form-control"
                    placeholder="For Male/Female"
                    required
                    />
                <button type="submit" className="form-submit">Submit</button>
            </form>
                <button onClick={handleDelete} className="button-delete">Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateProduct
