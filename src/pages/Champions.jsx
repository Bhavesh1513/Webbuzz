import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/ChampionsPageComponents/Cards'

const Champions = () => {
  return (
    <div className='text-white bg-secondary-color h-[100%] flex flex-col justify-center items-center'>
        <Navbar/>
        <Cards/>
    </div>
  ) 
}

export default Champions