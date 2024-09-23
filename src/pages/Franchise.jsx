// src/App.js
import React from 'react';
import FranchiseCard from '../components/FranchiseComponents/FranchiseCard';
import Navbar from '../components/Navbar'
import { franchises } from '../data/Franchised';
import TataIpl from '../assets/TataIpl.png'
import ScrollTopButton from '../components/Utils/ScrollTopButton'

const Franchise = () => {
  return (
    <div className="text-center bg-ternary-color flex flex-col justify-center items-center">
      <Navbar />
      <div className='flex flex-col justify-center items-center p-10'>
        <div className='w-[180px] h-[111px]'>
          <img className='w-[100%] h-[100%] bg-ternary-color' src={TataIpl} alt="TATA IPL" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-20  mt-16 " >
          {franchises.map((team, index) => (
            <FranchiseCard key={index} team={team} />
          ))}

        </div>
      </div>
      <ScrollTopButton/>
    </div>
  );
};

export default Franchise;
