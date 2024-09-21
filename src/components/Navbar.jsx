import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='text-white  w-11/12 py-8 mx-auto text-3xl font-semibold border-b-2 flex flex-row justify-between items-center'>
        <div className='h-[100%] '>
        <NavLink data-id="1" style={{ textDecoration: 'none',height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} to="/" >Logo</NavLink>
        </div>

        <div className='flex flex-row justify-between gap-16 h-[100%]'>
            <div className='h-[100%]'>
            <NavLink data-id="1" style={{ textDecoration: 'none',height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} to="/login" >Upcoming Matches</NavLink>
            </div>
            <div className='h-[100%]'>
            <NavLink data-id="1" style={{ textDecoration: 'none',height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} to="/teams" >Teams</NavLink>
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

        </div>

        <div className='h-[100%]'>
        <NavLink data-id="1" style={{ textDecoration: 'none',height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}} to="/registration" >Sign up</NavLink>
        </div>
    </div>
  )
}

export default Navbar