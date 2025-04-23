import React from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'

const Home = () => {
    return (
        <div className='w-full h-[500px] px-4 lg:px-6 relative'>
          <Banner />
          <Category />
        </div>
    )
}

export default Home