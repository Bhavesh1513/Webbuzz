import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './../assets/CricketManLogo3.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='text-white w-11/12 py-5 mx-auto text-3xl font-semibold border-b-2 flex justify-between items-center'>
      {/* Logo */}
      <div className='h-[100%] nav-link rounded-[50%]'>
        <NavLink
          style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#0000ff' }}
          to="/"
        >
          <img className='w-[100%] h-[100%] rounded-[50%]' src={logo} alt="logo" />
        </NavLink>
      </div>

      <div className='md:hidden'>
        <button ref={buttonRef} onClick={toggleMenu} className='text-4xl'>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      <div className='hidden md:flex flex-row justify-between gap-16 h-[100%]'>
        <div className='h-[100%] nav-link'>
          <NavLink
            style={{ textDecoration: 'none', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            to="/ipl"
          >
            IPL Exclusive
          </NavLink>
        </div>
        <div className='h-[100%] nav-link'>
          <NavLink
            style={{ textDecoration: 'none', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            to="/login"
          >
            Upcoming Matches
          </NavLink>
        </div>
        <div className='h-[100%] nav-link'>
          <NavLink
            style={{ textDecoration: 'none', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            to="/teams"
          >
            Teams
          </NavLink>
        </div>
        <div className='h-[100%] flex justify-center items-center'>
          <div className='glowing-border'>
            <NavLink
              className='glowing-text'
              style={{ textDecoration: 'none' }}
              to="/champions"
            >
              Champions
            </NavLink>
          </div>
        </div>
        <div className='h-[100%] nav-link'>
          <NavLink
            style={{ textDecoration: 'none', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            to="/registration"
          >
            Sign up
          </NavLink>
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className={`absolute top-[93px] right-0 text-white flex flex-col justify-start gap-4 text-3xl z-10 w-full pl-10 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'
            } bg-gradient-to-r from-[#041a30] from-60% via-[#021d3b] via-30% to-[#161b40] to-10% py-4 h-[100vh]`}
        >
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/ipl"
            onClick={() => setIsOpen(false)}
          >
            IPL Exclusive
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/login"
            onClick={() => setIsOpen(false)}
          >
            Upcoming Matches
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/teams"
            onClick={() => setIsOpen(false)}
          >
            Teams
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none' }}
            to="/champions"
            onClick={() => setIsOpen(false)}
          >
            Champions
          </NavLink>
          <NavLink
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
