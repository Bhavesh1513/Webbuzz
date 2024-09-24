import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/TeamsPageComponents/Cards'
import ScrollTopButton from '../components/Utils/ScrollTopButton'
const Teams = () => {
  return (
    <div className='text-white bg-gradient-to-r from-blue-500 to-indigo-600
 h-[100%] flex flex-col items-center'>
      <Navbar />
      <Cards />
      <ScrollTopButton />
    </div>
  )
}

export default Teams