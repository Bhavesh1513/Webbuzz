import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/ChampionsPageComponents/Cards'
import ScrollTopButton from '../components/Utils/ScrollTopButton'

const Champions = () => {
  return (
    <div className='text-white bg-gradient-to-r from-[#F9F295] from-60% via-[#E0AA3E] via-30% to-[#B88A44] to-10% h-[100%] flex flex-col justify-center items-center'>
        <Navbar/>
        <Cards/>
        <ScrollTopButton/>
    </div>
  ) 
}

export default Champions