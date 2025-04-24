
import React from 'react'
import { assets } from '../assets/greencart_assets/assets.js'

const HomeBottomBanner = () => {
    const { bottom_banner_image,
        bottom_banner_image_sm,
        delivery_truck_icon,
        leaf_icon,
        coin_icon,
        trust_icon } = assets
    return (
        <div>
            <div className='relative h-fit my-8 md:h-[400px] lg:h-fit'>
                <img src={bottom_banner_image} className='hidden md:block h-full w-full' alt="" />
                <img src={bottom_banner_image_sm} className='md:hidden abslute h-full w-full top-0 left-0' alt="" />

                <div className='absolute top-6 left-10 sm:right-[50%] sm:translate-x-[50%] md:right-24 md:ml-[15vw] lg:right-20 md:top-[50%] md:-translate-y-[50%] sm:top-20 '>
                    <h4 className=''>Why We Are the Best?</h4>

                    <div className=' sm:space-y-10 md:space-y-5'>
                        <div className='flex gap-4 items-center mt-6'>
                            <img src={delivery_truck_icon} className='w-[35px] h-[35px]' alt="" />
                            <div>
                                <p className='font-bold text-xl md:text-2xl'>Fastest Delivery</p>
                                <p className='text-sm opacity-75'>Groceries delivered in under 30 minutes.</p>
                            </div>
                        </div>

                        <div className='flex gap-4 items-center mt-6'>
                            <img src={leaf_icon} className='w-[35px] h-[35px]' alt="" />
                            <div>
                                <p className='font-bold text-xl md:text-2xl'>Freshness Guaranteed</p>
                                <p className='text-sm opacity-75'>Fresh produce straight from the source.</p>
                            </div>
                        </div>

                        <div className='flex gap-4 items-center mt-6'>
                            <img src={coin_icon} className='w-[35px] h-[35px]' alt="" />
                            <div>
                                <p className='font-bold text-xl md:text-2xl'>Affordable Prices</p>
                                <p className='text-sm opacity-75'>Quality groceries at unbeatable prices.</p>
                            </div>
                        </div>

                        <div className='flex gap-4 items-center mt-6'>
                            <img src={trust_icon} className='w-[35px] h-[35px]' alt="" />
                            <div>
                                <p className='font-bold text-xl md:text-2xl'>Trusted by Thousands</p>
                                <p className='text-sm opacity-75'>Loved by 10,000+ happy customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBottomBanner