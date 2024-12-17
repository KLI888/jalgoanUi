import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './Live.css'
function Live() {
  const { id } = useParams();

  const apiUrl = `${import.meta.env.VITE_DJANGO_API}/app/live/`;
  const [ads, setAds] = useState([]);

  const getCsrfToken = async () => {
    try {
      const csrfToken = await getCsrfToken();

      const response = await axios.get(`${djangoApi}/app/csrf-token/`);
      return response.data.csrfToken;
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
      return '';
    }
  };


  useEffect(() => {
    try {
      const response = axios.request(apiUrl,  {
        headers: {
            'X-CSRFToken': csrfToken,
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        params: {
            id: id,
        },
    });

    setAds(response.data);
    console.log(response.data);
      
    } catch (error) {
      
    }
  },[])


  return (
    <div className="iframe-container">
        <iframe src={ads.crousel_add_img_code} title="Jalgaon.Com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Live