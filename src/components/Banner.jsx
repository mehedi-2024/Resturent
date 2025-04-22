import React from 'react'
import { assets } from '../assets/greencart_assets/assets'

const Banner = () => {
    const asset = assets
    console.log(asset.main_banner_bg)
  return (
    <div className={`relative w-full h-[85vh] lg:h-[70vh] bg-[url('${asset.main_banner_bg}')] bg-cover bg-[80%] bg-no-repeat`}>
        {/* <div className='w-full h-full absolute top-0 left-0 z-10'>
            <img src={asset.main_banner_bg} className='w-full h-full md:h-[65vh] hidden md:block' alt="" />
            <img src={asset.main_banner_bg_sm} className='w-full h-full md:hidden' alt="" />
        </div> */}
    </div>
  )
}

export default Banner