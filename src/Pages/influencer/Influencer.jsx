import React from 'react'
import Navbar from "../../Components/navbar/Navbar.jsx"

import InfluencerCard from '../../Components/cards/InfluencerCard.jsx';
import HeroSection from '../../Components/homesection/HeroSection.jsx';
import UnderHero from "../../Components/common/display/UnderHero.jsx"

const Influencers = () => {
  return (
  <>
  <Navbar/>
  <HeroSection/>
  <UnderHero/>
  <InfluencerCard/>
  {/* <Footer/> */}
  </>
  )
}

export default Influencers
