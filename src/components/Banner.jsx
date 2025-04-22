import React from 'react'
import { assets } from '../assets/greencart_assets/assets'

const Banner = () => {
    const asset = assets
  return (
    <div className='relative w-full h-[100vh] lg:h-[70vh] lg'>
        <div className='w-full h-full absolute top-0 left-0 '>
            <img src={asset.main_banner_bg} className='w-full h-full md:h-[65vh] hidden md:block' alt="" />
            <img src={asset.main_banner_bg_sm} className='w-full h-full md:hidden' alt="" />
        </div>
    </div>
  )
}

export default Banner