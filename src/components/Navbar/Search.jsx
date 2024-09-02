import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './Search.css'
import axios from 'axios'
function Search() {
  const djangoApi = import.meta.env.VITE_DJANGO_API;
  const navigate = useNavigate();

  const [query, setQuery] = useState('')
  const [searchData, setSearchData] = useState([])

  const handleSearch = async () => {
    console.log('Search query:', query);
    await axios.get(`${djangoApi}/app/searchResult/?search=${query}`) 
    .then(response => {
      console.log(response.data);
      setSearchData(response.data)
      navigate(`/searchResults`, { state: { searchData } });

    })
    .catch(error => {
      console.error('Error fetching data ads:', error);
    });
  };

  const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
          event.preventDefault();  // Prevents the default form submission behavior
          handleSearch();  // Call the search function when Enter is pressed
        }
  };


  return (
    <div className="nav_serach">
        <div className="select_city">
            <i class='bx bx-current-location'></i>
            <p>Select City</p>
        </div>
        <div className="main_search">
            <i class='bx bx-search'></i>
            <input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}  // Attach the event handler
                placeholder="Search..." 
                type="search" 
                name="input_business" 
                id="input_business" 
                className="input_business" 
            />
        </div>
    </div>
  )
}

export default Search
