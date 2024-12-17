import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './Live.css';

// import { useLocation, useParams } from 'react-router-dom';

function Live() {
  const { id } = useParams(); // Get the dynamic id from the URL
  const location = useLocation(); // Get the location object, which contains the state
  const itemData = location.state?.itemData; // Access the passed data from the Link

  console.log(itemData); // Check if the data is correctly received

  if (!itemData) {
    return <div className="iframe-container">Loading...</div>; // Show loading if data is not yet available
  }

  return (
    <div className="iframe-container">
      {/* Render your component content based on itemData */}
      <div
        dangerouslySetInnerHTML={{
          __html: itemData.crousel_add_img_code,
        }}
      />
    </div>
  );
}


export default Live;
