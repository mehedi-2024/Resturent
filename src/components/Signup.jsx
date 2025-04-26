
import { assets } from '../assets/greencart_assets/assets.js'
const Signup = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center max-w-[600px] px-3 sm:px-6 md:px-12 mx-auto">
      <h3 className='-mb-6 mt-3'>Signup</h3>
        <form action="" className='w-full flex flex-col gap-4 border-[1px] px-8 py-8 md:py-12 border-gray-400 rounded-xl mt-10'>
          <label htmlFor="name">
            <span className='  ml-1'>Name :</span>
            <input type="text" className='w-full border-[2px] border-gray-300 h-10 bg-transparent rounded-md px-4 tracking-wide ' placeholder='Enter your name' name='name' required />
          </label>
          <label htmlFor="name">
            <span className='  ml-1'>Email :</span>
            <input type="email" className='w-full border-[2px] border-gray-300 h-10 bg-transparent rounded-md px-4 tracking-wide ' placeholder='Enter your email' name='email' required />
          </label>
          <label htmlFor="name">
            <span className='  ml-1'>Password :</span>
            <input type="password" className='w-full border-[2px] border-gray-300 h-10 bg-transparent rounded-md px-4 tracking-wide ' placeholder='Enter your password' name='password' required />
          </label>

          <button type='submit' className=' bg-green-500 rounded-lg text-white text-xl py-2 font-bold tracking-wider mt-3 active:scale-[.99]'>Signup</button>
        </form>

        <h6 className='text-2xl my-4'>OR</h6>

        <div className='flex items-center gap-4 p-1 border-[2px] border-gray-500 rounded-full w-full justify-center cursor-pointer active:scale-x-[.99]'>
          <img src={assets.google_icon} className='w-[30px] h-[30px]' alt="" />
          <p className='text-[1.1rem]'>Continue with google</p>
        </div>
      </div>
    </div>
  )
}

export default Signup