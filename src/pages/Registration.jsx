import React from 'react'
import Signup from '../components/Registrations/Signup'
import { useNavigate } from 'react-router-dom'
import { FaCircleArrowLeft } from "react-icons/fa6";


const Registration = () => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  }
 
  // bg-gradient-to-r from-[#002244] from-60% via-[#191970] via-30% to-[#0018A8] to-10%
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-[100vw] overflow-x-hidden flex flex-col items-start h-[100vh] justify-start pb-14"  >
      {/* <div className='wrapper'> */}
      <button className=" text-2xl text-white mt-10  ml-10 font-semibold bg-[#FF6600] rounded-[50%] p-[15px] transition duration-300 hover:bg-[#ffa365]"  onClick={handleNavigate} >
      <FaCircleArrowLeft   fontSize={24} color='white'/>
      </button>
      {/* </div> */}
      <Signup />

    </div>
  )
}

// bg-[#0000ff] px-10 text-xl py-2 text-white mt-10  ml-10 shadow-4

export default Registration