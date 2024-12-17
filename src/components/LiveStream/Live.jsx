import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './Live.css';

function Live() {
  const { id } = useParams();
  const location = useLocation();  // Get the location object
  const [ads, setAds] = useState(location.state?.itemData || {}); // Use the passed data

  // If data is not available, show a loading message or return early
  if (!ads || !ads.crousel_add_img_code) {
    return <div className="iframe-container">Loading...</div>;
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
