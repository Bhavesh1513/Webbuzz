import React from 'react';

const FeatureCard = ({ isLeft, data }) => {
  return (
    <div
      className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} bg-[#0000ff] shadow-md rounded-md overflow-hidden`}
    >
      {/* Left section */}
      <div className='p-8'>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-3xl lg:text-5xl'>{data?.heading}</h2>
          <div className='w-1/2 h-1 bg-white my-4'></div>
          <p className='text-lg lg:text-2xl'>{data?.description}</p>
        </div>
      </div>

      {/* Image section */}
      <div className='flex items-center justify-center bg-blue-500 w-[800px] h-[220px]'>
        <img
          src={data?.image}
          alt=""
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default FeatureCard;
