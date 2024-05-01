import React from 'react'
import Navbar from "../../Components/navbar/Navbar.jsx"
import Card from '../../Components/cards/CouponCard.jsx'
import DataBanner from '../../Components/common/display/DataBanner.jsx'

import HeroSection from '../../Components/homesection/HeroSection.jsx'
const LandingPage = () => {
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
