import React from 'react';

const FeatureCard = ({ isLeft, data }) => {
  return (
    <div
      className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} bg-primary-color shadow-md rounded-md overflow-hidden`}
    >
      <div className='p-8'>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-3xl lg:text-5xl'>{data?.heading}</h2>
          <div className='w-1/2 h-1 bg-white my-4'></div>
          <p className='text-lg lg:text-2xl'>{data?.description}</p>
        </div>
      </div>

      <div className='flex items-center justify-center bg-blue-500 w-[800px] h-[220px] rounded-md'>
        <img
          src={data?.image}
          alt=""
          className='object-cover rounded-md'
        />
      </div>
    </div>
  );
};

export default FeatureCard;
