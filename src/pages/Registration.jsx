import React from 'react'
import Signup from '../components/Registrations/Signup'
import { useNavigate } from 'react-router-dom'
import { FaCircleArrowLeft } from "react-icons/fa6";


const Registration = () => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-[100vw] overflow-x-hidden flex flex-col items-start h-[100vh] justify-start pb-14"  >
      <button className=" text-2xl text-white mt-10  ml-10 font-semibold bg-[#FF6600] rounded-[50%] p-[15px] transition duration-300 hover:bg-[#ffa365]" onClick={handleNavigate} >
        <FaCircleArrowLeft fontSize={24} color='white' />
      </button>
      <Signup />

    </div>
  )
}

export default Registration