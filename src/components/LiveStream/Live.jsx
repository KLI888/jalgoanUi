import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Live.css';

function Live() {
  const { id } = useParams();
  const apiUrl = `${import.meta.env.VITE_DJANGO_API}/app/live/`;
  const [ads, setAds] = useState({});
  const [csrfToken, setCsrfToken] = useState('');

  // Fetch CSRF token
  const getCsrfToken = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_DJANGO_API}/app/csrf-token/`);
      setCsrfToken(response.data.csrfToken);
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
    }
  };

  // Fetch ads data when component mounts
  useEffect(() => {
    getCsrfToken(); // Fetch CSRF token first

    const fetchAdsData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'X-CSRFToken': csrfToken,
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          params: {
            id: id,
          },
        });
        setAds(response.data); // Set fetched ads data
        console.log(response.data); // For debugging
      } catch (error) {
        console.error('Error fetching ads data:', error);
      }
    };

    if (csrfToken) {
      fetchAdsData(); // Fetch ads only after CSRF token is available
    }
  }, [csrfToken, id]); // Rerun effect when csrfToken or id changes

  if (!ads.crousel_add_img_code) {
    return <div>Loading...</div>; // Loading state if ad data is not available
  }

  return (
    <div className="iframe-container">
      {/* Render the iframe HTML code from ads.crousel_add_img_code */}
      <div
        dangerouslySetInnerHTML={{
          __html: ads.crousel_add_img_code,
        }}
      />
    </div>
  );
}

export default Live;
