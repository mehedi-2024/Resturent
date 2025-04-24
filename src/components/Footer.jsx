import React from 'react'
import { assets } from '../assets/greencart_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='w-full min-h-[25vh] bg-green-50 p-12 rounded-lg mt-10 md:mt-16 lg:mt-24 md:grid grid-cols-2 gap-8'>
            <div className='w-[100%] md:w-[80%]'>
                <div className="mb-4">
                    <img src={assets.logo} alt="" />
                </div>
                <p className='opacity-75 text-[1rem]'>
                    We deliver fresh groceries and snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.
                </p>
            </div>

            <div className='md:flex justify-between lg:grid grid-cols-3'>
                <div className='mt-14 md:mt-0 col-span-1'>
                    <h5 className='text-xl'>Quick Links</h5>
                    <div className="flex flex-col gap-1 opacity-70 mt-3">
                        <Link className='text-[.9rem] font-normal hover:underline' to={''}>Home</Link>
                        <Link className='text-[.9rem] font-normal hover:underline' to={''}>Best Sellers</Link>
                        <Link className='text-[.9rem] font-normal hover:underline' to={''}>Offers & Deals</Link>
                        <Link className='text-[.9rem] font-normal hover:underline' to={''}>Contact Us</Link>
                        <Link className='text-[.9rem] font-normal hover:underline' to={''}>FAQs</Link>
                    </div>
                </div>

                <div className='lg:flex justify-around col-span-2'>
                    <div className='mt-7 md:mt-0'>
                        <h5 className='text-xl'>Need help?</h5>
                        <div className="flex flex-col gap-1 opacity-70 mt-3">
                            <Link className='text-[.9rem] font-normal hover:underline' to={''}>Delivery Information</Link>
                            <Link className='text-[.9rem] font-normal hover:underline' to={''}>Return & Refund Policy</Link>
                            <Link className='text-[.9rem] font-normal hover:underline' to={''}>Payment Methods</Link>
                            <Link className='text-[.9rem] font-normal hover:underline' to={''}>Track your Order</Link>
                            <Link className='text-[.9rem] font-normal hover:underline' to={''}>Contact Us</Link>
                        </div>
                    </div>
                    <div className='mt-7 lg:mt-0'>
                        <h5 className='text-xl'>Follow Us</h5>
                        <div className="flex flex-col gap-1 opacity-70 mt-3">
                            <Link className='text-[.9rem] font-normal hover:underline' to={''}>Instagram</Link>
                            <Link className='text-[.9rem] font-normal hover:underline' to={''}>Twitter</Link>
                            <Link className='text-[.9rem] font-normal hover:underline' to={''}>Facebook</Link>
                            <Link className='text-[.9rem] font-normal hover:underline' to={''}>Contact Us</Link>
                            <Link className='text-[.9rem] font-normal hover:underline' to={''}>YouTube</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer