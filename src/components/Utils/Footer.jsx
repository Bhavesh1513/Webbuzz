import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-100 p-10 text-black border-b-8 border-[#FF6600] mt-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#FF6600] rounded-full"></div>
            <h2 className="text-xl font-bold">WebBuzz</h2>
          </div>
          <div className='text-xl'>
            <p className="font-bold text-xl">Email</p>
            <p>chaudhri.mvbhavesh15@gmail.com</p>
          </div>
        </div>
        <div className="text-right mt-6 md:mt-0 flex flex-col justify-center items-center">
          <p className="text-xl font-semibold">Your Ultimate Destination for All Things Cricket!</p>
          <div className="flex flex-row justify-center items-center h-12 w-32">
            <div className='w-[100%] h-[100%]'>
              <NavLink
                style={{ textDecoration: 'none', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}
                to="https://www.linkedin.com/in/bhavesh-chaudhari-388824256/"
              >
                <FaLinkedin fontSize={20} color='#0000ff' />
              </NavLink>
            </div>
            <div className='w-[100%] h-[100%]' >
              <NavLink
                style={{ textDecoration: 'none', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                to="https://github.com/Bhavesh1513"
              >
                <FaGithub fontSize={20} color='black' />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#FF6600] h-1  mb-6 w-[100%]'></div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0 text-xl font-bold">@2024 <span>WebBuzz</span> All Rights Reserved </p>
        <div className="flex mr-10  e">
          <NavLink
            data-id="1"
            className="text-white bg-black py-2 px-20 rounded-full hover:border-[#FF6600] text-2xl font-semibold hover:bg-white hover:text-black hover: border-2 "
            to="/ipl"
          >
            IPL
          </NavLink>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
