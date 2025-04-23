import React from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import BestSeller from '../components/BestSeller'
import HomeBottomBanner from '../components/HomeBottomBanner'

const Home = () => {
    return (
        <div className='w-full px-4 lg:px-6 relative'>
          <Banner />
          <Category />
          <BestSeller />
          <HomeBottomBanner />
        </div>
    )
}

export default Home