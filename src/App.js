import './App.css'
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Champions from './pages/Champions'
import Teams from './pages/Teams'
import Registration from './pages/Registration'
import Login from './pages/Login'
import UpcomingMatchesPage from './pages/UpcomingMatchesPage'
import Franchise from './pages/Franchise'
const App = () => {
  return (
    <div className=' w-[100%]'>
      <Routes>
        <Route path='/' element={<LandingPage/>}  />
        <Route path='/upcomingmatches' element={<UpcomingMatchesPage/>}  />
        <Route path='/champions' element={<Champions/>}  />
        <Route path='/teams' element={<Teams/>}  />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/ipl' element={<Franchise/>} />
      </Routes>
    </div>
  )
}

export default App