import React from 'react';
import '../../Util.css';

const Card = ({ id, image, country, winningYears }) => {
  return (
    <div className='flex flex-col items-center rounded-2xl border-2 p-4 w-96 text-black bg-richwhite-4 shadow-rays'
    data-aos="flip-up"
    >
      <div className='w-64 h-64'> {/* Fixed size for image container */}
        <img
          className='rounded-full w-full h-full object-cover shadow-2xl'
          src={image}
          alt={country}
        />
      </div>
      
      <div className='mt-4 text-4xl font-semibold'>
        {country}
      </div>


      <div className='mt-2 text-2xl flex flex-row justify-center items-baseline gap-2'>
        <div className='text-4xl min-w-fit'> Won in:</div>
        <div className='text-3xl'> {winningYears}</div>
      </div>
    </div>
  );
};

export default Card;


