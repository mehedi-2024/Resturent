import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  useEffect(() => {
    document.body.classList.add('light')
  }, [])
  return (
    <div className='bg-bg text-text max-w-[1300px] mx-auto overflow-x-hidden min-h-screen'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App