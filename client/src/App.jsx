import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import ParticlesBackground from './components/ParticlesBackground'

const App = () => {
  return (
    <div className='relative'>
      <ParticlesBackground />
      <div className=''>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/profile' element={<ProfilePage/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App