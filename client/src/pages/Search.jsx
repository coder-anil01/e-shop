import React from 'react'
import { useSearch } from '../context/search';
import '../style/HomePage.css'
import { Link } from 'react-router-dom';

const Search = () => {

    const [values, setValues] = useSearch();
    // console.log(values?.results?.products);
    const data = values?.results?.products
  return (
    <>
      <h2>Search Product</h2>
      <h4>{values?.results.length < 1 ? "No Product Found" : `Found ${values?.results.total}`}</h4>

      <>
    <div className='homepage'>
      <div className='homepage-left'>
        <h3>Filter</h3>
    
      </div>
      <div className='homepage-right'>
        {data.map((p)=>(
          <Link to={`/product/${p._id}`} className='h-product-card' key={p._id}>
            <img className='h-Product-image' src={p.image} alt={p.title} />
            <div className='h-product-text'>
              <div className='h-product-ttle' >{p.title.slice(0,15)}...</div>
              <div className='h-product-price' >₹ {p.price}/-</div>
              <div className='h-product-delivery' >Free Delivery</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
    </>
  )
}

export default Search
