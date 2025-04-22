import React from 'react'
import { assets } from '../assets/greencart_assets/assets'

const Banner = () => {
    const asset = assets
    console.log(asset.main_banner_bg)
    return (
        <div className={`relative w-full h-[60vh] lg:h-[85vh] bg-[url('https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-[90%] bg-no-repeat text-center text-text2 bg-blend-overlay p-8 bg-black/70 flex items-center rounded-md`}>
          
            <div className='md:w-[60%] lg:w-[50%] md:text-left space-y-6'>
                <h2 className='leading-snug tracking-tight'>Freshness You Can Trust, Savings You will Love!</h2>
                <div className='flex gap-5 justify-center md:justify-start'>
                    <button className='btn btn-primary'>Shop Now</button>
                    <button className='hidden md:inline btn btn-info'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default Banner