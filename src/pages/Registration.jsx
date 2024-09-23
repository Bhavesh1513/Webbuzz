import React from 'react'
import Signup from '../components/Registrations/Signup'
import { useNavigate } from 'react-router-dom'


const Registration = () => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  }
 
  // bg-gradient-to-r from-[#002244] from-60% via-[#191970] via-30% to-[#0018A8] to-10%
  return (
    <div className="bg-gradient-to-r from-[#002244] from-60% via-[#191970] via-30% to-[#0018A8] to-10% w-[100vw] overflow-x-hidden flex flex-col items-start h-[100vh] justify-start pb-14"  >
      {/* <div className='wrapper'> */}
      <button className="px-10 text-xl py-2 text-white mt-10  ml-10 btn-pink font-semibold bg-[#0000ff]" id="btn-top" onClick={handleNavigate} >
        Back
      </button>
      {/* </div> */}
      <Signup />

    </div>
  )
}

// bg-[#0000ff] px-10 text-xl py-2 text-white mt-10  ml-10 shadow-4

export default Registration