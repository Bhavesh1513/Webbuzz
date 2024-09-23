import React from 'react'
import Navbar from '../components/Navbar'

import ImageSlider from '../components/LandingPageComponents/ImageSlider'
import ScrollTopButton from '../components/Utils/ScrollTopButton'
import Footer from '../components/Utils/Footer'
import Formats from '../components/LandingPageComponents/Formats'
import IntroText from '../components/LandingPageComponents/IntroText'

const LandingPage = () => {
  return (
    <div className='text-white bg-gradient-to-r from-[#041a30] from-60% via-[#021d3b] via-30% to-[#161b40] to-10% h-[100%]'>
        <Navbar/>
        <IntroText/>
      <ImageSlider/>
      <Formats/>
      <Footer/>
      <ScrollTopButton/>
        
    </div>
  )
}

export default LandingPage