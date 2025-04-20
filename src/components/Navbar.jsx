
import React, { useState } from 'react'
import { assets } from '../assets/greencart_assets/assets'
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const { logo } = assets


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <nav className='flex justify-between px-6 py-4 items-center relative'>
            <div>
                <img src={logo} alt="" />
            </div>

            {/* for desktop */}
            <div className='hidden gap-6 items-center lg:flex'>
                <form className='flex items-center h-8 border-r-0 border-[2px] border-secondary bg-white rounded '>
                    <input className='px-2 py-1 bg-transparent w-52 outline-none' type="text" />
                    <button className='bg-primary h-full w-8 flex justify-center items-center '>
                        <FaSearch />
                    </button>
                </form>

                <ul className='flex items-center gap-6'>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>All Foods</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>Contact Us</NavLink>
                    </li>
                </ul>

                <button className='btn btn-primary'>Sign In</button>
            </div>

            {/* for tab and mobile */}

            <div className='flex items-center gap-6 lg:hidden'>
                <button className='btn btn-primary'>Sign In</button>

                <button onClick={() => setNavOpen(!navOpen)}>
                    {
                        navOpen ? <FaTimes size={28} /> : <FaBars size={28} />
                    }
                </button>

                <div className={`flex flex-col gap-6 items-center pr-8  absolute top-16 bg-secondary w-[70vw] max-w-[300px] py-12 rounded-lg ${!navOpen ? '-right-96' : ' right-1'} duration-300 shadow-md`}>
                    <form className='flex items-center h-8 border-r-0 border-[2px] border-primary bg-white rounded '>
                        <input className='px-2 py-1 bg-transparent w-52 outline-none' type="text" />
                        <button className='bg-primary h-full w-8 flex justify-center items-center '>
                            <FaSearch />
                        </button>
                    </form>

                    <ul className='flex flex-col gap-4'>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>All Foods</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar