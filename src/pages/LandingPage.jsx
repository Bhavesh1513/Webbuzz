import React from 'react'
import Navbar from '../components/Navbar'
import IntroText from '../components/LandingPageComponents.jsx/IntroText'
import ImageSlider from '../components/LandingPageComponents.jsx/ImageSlider'


const LandingPage = () => {
  return (
    <div className='text-white bg-primary-color h-[100%]'>
        <Navbar/>
        <IntroText/>
        <ImageSlider/>
    </div>
  )
}

export default LandingPage