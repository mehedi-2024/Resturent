
import React from 'react'
import { categories } from '../assets/greencart_assets/assets'

const Category = () => {

    return (
        <div className=' mt-5 py-8'>
            <h3>Categories</h3>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-5 mt-4'>
                {
                    categories.map((each, index) => {
                        console.log(each)
                        return (
                            <div key={index} className={`bg-sky-200 w-full flex flex-col items-center gap-5 rounded-lg py-8 hover:scale-[1.02]`}>
                                <img src={each.image} className='w-[110px] h-[110px] rounded-full' alt="" />
                                <p className='font-semibold'>{each.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category