import React, { useState, useEffect, useContext } from "react";
import Advertise from '../components/Advertise/Advertise';
import Categorytile from '../components/Categorytile/Categorytile';
import Stocktickle from '../components/Stocktickle/Stocktickle';
import Releatedarticles from '../components/Releatedarticles/Releatedarticles';
import Services from '../components/Services/Services';
import SpecialSections from '../components/SpecialSections/SpecialSections';
import LoginSignup from '../components/LoginSignup/LoginSignup';
import { FormContext } from "../context/FormContext";
import { UserContext } from '../context/UserContext';
import { LoginContext } from '../context/LoginContext';

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const { closeForm, setCloseForm } = useContext(FormContext);
  const { user, setUser } = useContext(UserContext);
  const { isLogin, setIsLogin } = useContext(LoginContext);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited == 'false') {
      setCloseForm(!closeForm)
      // setShowPopup(true);
      if(user){
        localStorage.setItem("hasVisited", "true");
      } 
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="main_section">
      <Stocktickle />
      <Advertise />
      <Services />
      <Categorytile />
      <Releatedarticles />
      <SpecialSections />
      <LoginSignup />

      {!user && closeForm && (
        <LoginSignup />
      )}



      {/* Add some basic styles for the popup */}
      {/* <style>
        {`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .popup-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            position: relative;
            text-align: center;
            width: 90%;
            max-width: 400px;
          }
          .close-popup {
            margin-top: 10px;
            padding: 8px 16px;
            background-color: red;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        `}
      </style> */}
    </div>
  );
}

export default Home;
