
import React, { useEffect, useState } from 'react'
import { dummyProducts } from '../assets/greencart_assets/assets'
import { CiShoppingCart } from "react-icons/ci";

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {    
      const prodects = dummyProducts.slice(0, 5)
      setBestSeller([...prodects])
    }, [])
    
    return (
        <div className=' mt-5 py-8'>
            <h3>Best Sellers</h3>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4'>
                {
                    bestSeller.map((each, index) => {
                        // console.log(each)
                        return (
                            <div key={index} className={`bg-bg border-[1px] border-gray-300 hover:shadow w-full flex flex-col items-center gap-5 rounded-lg py-8 hover:scale-[1.02] px-[10%]`}>
                                <img src={each.image[0]} className='w-[200px] h-[200px] -my-6 rounded-full' alt="" />
                                <div className='w-full grid gap-3'>
                                    <p className='opacity-80'>{each.category}</p>
                                    <p className='font-semibold -mt-4'>{each.name}</p>

                                    {/* rating */}
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input
                                            type="radio"
                                            name="rating-2"
                                            className="mask mask-star-2 bg-orange-400"
                                            defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <p className='text-orange-500 font-semibold'>{`$${each.offerPrice}`} <span className='line-through opacity-75 text-gray-900'>{`$${each.price}`}</span></p>

                                        <button className='btn btn-success flex items-center gap-1 text-lg'><CiShoppingCart size={25} />Add </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestSeller