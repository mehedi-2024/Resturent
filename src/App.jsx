import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  useEffect(() => {
    document.body.classList.add('light')
  }, [])
  return (
    <div id='main' className='bg-bg text-text max-w-screen mx-auto xl:px-[7%] px-0 overflow-x-hidden min-h-screen'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App