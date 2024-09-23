import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/TeamsPageComponents/Cards'
import ScrollTopButton from '../components/Utils/ScrollTopButton'
const Teams = () => {
  return (
    <div className='text-white bg-gradient-to-r from-[#007FFF] from-60% via-[#0000FF] via-30% to-[#002D62] to-10%
 h-[100%] flex flex-col items-center'>
    <Navbar/>
    <Cards/>
    <ScrollTopButton/>
</div>
  )
}

export default Teams