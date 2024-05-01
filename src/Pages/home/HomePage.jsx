import React from 'react'
import Navbar from '../../Components/navbar/Navbar.jsx';
import HeroSection from '../../Components/homesection/HeroSection.jsx';
import BrandSection from '../../Components/homesection/BrandSection.jsx';
import Footer from '../../Components/footer/Footer.jsx';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const isLoggedIn = location?.state?.log;

  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} />
    <HeroSection/>
    <BrandSection/>
    <Footer/>
    </>
  )
}

export default HomePage