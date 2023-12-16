import React from 'react'
import "../style/SearchInput.css"
import { useSearch } from '../context/search'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {

    const [values, setValues] = useSearch();
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const {data} = await axios.get(`http://localhost:8000/api/v1/product/search/${values.keyword}`);
            setValues({ ...values, results: data});
            navigate('/search');
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
      <form action='search' className='search-form' onSubmit={handleSubmit}>
        <input
        className='search-input'
        type='search'
        placeholder="🔍 Search Product"
        value={values.keyword}
        onChange={(e)=> setValues({ ...values, keyword: e.target.value })}
        />
        <button className='search-button' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchInput
