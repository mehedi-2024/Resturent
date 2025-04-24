
import React from 'react'

const Subsvribe = () => {
    return (
        <div className='text-center my-28'>
            <h5>Never Miss a Deal!</h5>
            <p className='mt-1 opacity-75 mb-8 md:mb-12'>
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>

            <div className='max-w-[600px] h-12 rounded-md mx-auto overflow-hidden flex'>
                <input type="email" className='h-[100%] outline-none w-[75%] border-[2px] border-r-0 border-gray-400 rounded-l-md pl-4 tracking-wide' placeholder='Enter your email' />

                <button className='w-[25%] h-full bg-green-500 text-white font-semibold border-3 border-l-0 border-green-500 hover:bg-green-400'>Subscribe</button>
            </div>
        </div>
    )
}

export default Subsvribe