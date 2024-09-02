import React from 'react'
import { useLocation } from 'react-router-dom';
import Categorysection from '../components/Categorysection/Categorysection';
import SearchSection from '../components/Categorysection/SearchSection';

function SearchPage() {
    const location = useLocation();
    const { searchData } = location.state || { searchData: [] };
    return (
        <div className="main_section">
            <SearchSection searchData={searchData}/>
        </div>
    )
}

export default SearchPage
