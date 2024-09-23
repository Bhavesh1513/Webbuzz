import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin,FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-50 p-10 text-black border-b-8 border-[#0000ff] mt-16">
      {/* Upper section of footer */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        {/* Left section with Logo and Contact Info */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#0000ff] rounded-full"></div> {/* Replace this with your logo */}
            <h2 className="text-xl font-bold">WebBuzz</h2>
          </div>
          <div className='text-xl'>
            <p className="font-bold text-xl">Email</p>
            <p>chaudhri.mvbhavesh15@gmail.com</p>
          </div>
        </div>

        {/* Right section with Call-to-Action */}
        <div className="text-right mt-6 md:mt-0 flex flex-col justify-center items-center">
          <p className="text-xl font-semibold">Your Ultimate Destination for All Things Cricket!</p>
          <div className="flex flex-row justify-center items-center h-12 w-32">
            <div className='w-[100%] h-[100%]'>
            <NavLink
             style={{ textDecoration: 'none', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',}}
              to="https://www.linkedin.com/in/bhavesh-chaudhari-388824256/"
            >
            <FaLinkedin fontSize={20} />
            </NavLink>
            </div>
            <div className='w-[100%] h-[100%]' >
            <NavLink
             style={{ textDecoration: 'none', height: '100%', width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
              to="https://github.com/Bhavesh1513"
            >
            <FaGithub fontSize={20}/>
            </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='bg-[#0000ff] h-1  mb-6 w-[100%]'></div>
      {/* <hr className=" border-[#0000ff]  mb-6" /> */}

      {/* Bottom Section with Platforms */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0 text-xl font-bold">@2024 <span>WebBuzz</span> All Rights Reserved </p>
        <div className="flex mr-10  e">
        <NavLink
  data-id="1"
  className="text-white bg-black py-2 px-20 rounded-full hover:border-[#0000ff] text-2xl font-semibold hover:bg-white hover:text-black hover: border-2 "
  to="/aboutus"
>
  IPL
</NavLink>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
