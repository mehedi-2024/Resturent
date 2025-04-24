import React from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import BestSeller from '../components/BestSeller'
import HomeBottomBanner from '../components/HomeBottomBanner'
import Footer from '../components/Footer'
import Subsvribe from '../components/Subsvribe'

const Home = () => {
  return (
    <div className='w-full relative'>
      <div className=' px-4 lg:px-6 '>
        <Banner />
        <Category />
        <BestSeller />
        <HomeBottomBanner />
        <Subsvribe />
      </div>
      <Footer />
    </div>
  )
}

export default Home