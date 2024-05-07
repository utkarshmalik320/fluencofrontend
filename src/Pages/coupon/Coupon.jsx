import React from 'react'
import Navbar from "../../Components/navbar/Navbar.jsx"
import Card from '../../Components/cards/CouponCard.jsx'
import DataBanner from '../../Components/common/display/DataBanner.jsx'

import HeroSection from '../../Components/homesection/HeroSection.jsx'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {

  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <DataBanner/>
    <Card/>
    {/* <Footer/> */}
    </>
    
  )
}

export default LandingPage
