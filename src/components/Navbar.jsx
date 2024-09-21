import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='text-white w-11/12 py-8 mx-auto text-3xl font-semibold border-b-2 flex justify-between items-center'>
      {/* Logo */}
      <div className='h-[100%]'>
        <NavLink
          data-id="1"
          style={{ textDecoration: 'none', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          to="/"
        >
          Logo
        </NavLink>
      </div>

      {/* Hamburger Icon for <= 768px */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-3xl'>
          {isOpen ? '✖' : '☰'} {/* Switch between Hamburger and Cross Icon */}
        </button>
      </div>

      {/* Regular Links (Visible for >768px) */}
      <div className='hidden md:flex flex-row justify-between gap-16 h-[100%]'>
        <div className='h-[100%]'>
          <NavLink
            data-id="1"
            style={{ textDecoration: 'none', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            to="/login"
          >
            Upcoming Matches
          </NavLink>
        </div>
        <div className='h-[100%]'>
          <NavLink
            data-id="1"
            style={{ textDecoration: 'none', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            to="/teams"
          >
            Teams
          </NavLink>
        </div>
        <div className='h-[100%] flex justify-center items-center'>
          <div className='glowing-border'>
            <NavLink
              data-id="1"
              className='glowing-text'
              style={{ textDecoration: 'none' }}
              to="/champions"
            >
              Champions
            </NavLink>
          </div>
        </div>
        <div className='h-[100%]'>
          <NavLink
            data-id="1"
            style={{ textDecoration: 'none', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            to="/registration"
          >
            Sign up
          </NavLink>
        </div>
      </div>

      {isOpen &&(
      <div
        className={`absolute top-24 right-0 bg-white text-black flex flex-col gap-4 text-3xl z-10 w-full border-none pl-10 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'}`}
      >
        <NavLink
          data-id="1"
          style={{ textDecoration: 'none' }}
          to="/login"
          onClick={() => setIsOpen(false)} // Close menu on click
        >
          Upcoming Matches
        </NavLink>
        <NavLink
          data-id="1"
          style={{ textDecoration: 'none' }}
          to="/teams"
          onClick={() => setIsOpen(false)}
        >
          Teams
        </NavLink>
        <NavLink
          data-id="1"
          style={{ textDecoration: 'none' }}
          to="/champions"
          onClick={() => setIsOpen(false)}
        >
          Champions
        </NavLink>
        <NavLink
          data-id="1"
          style={{ textDecoration: 'none' }}
          to="/registration"
          onClick={() => setIsOpen(false)}
        >
          Sign up
        </NavLink>
      </div>
      )}
    </div>
  );
};

export default Navbar;
