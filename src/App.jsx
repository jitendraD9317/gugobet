import React, { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import AllRoute from './allroute/AllRoute';
import LoginHeader from './component/LoginHeader'; 
import MobileFooter from './component/MobileFooter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    bgColor1,
    bgColor2,
    PrimaryText,
    secondaryText,
    hoverColor,
    ClickActiveColor,
  } = useSelector((state) => state.theme);

  const location = useLocation();
  console.log(location.pathname, 'location');

  const handleLogin = (status) => {
    console.log('handleLogin called with status:', status);
    setIsLoggedIn(status);
  };

  return (
    <div>
    <Header /> 
      <Sidebar />
      <MobileFooter></MobileFooter>
      <AllRoute />
    </div>
  );
}

export default App;
