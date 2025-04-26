
import Lottie from 'lottie-react'
import React, { useContext } from 'react'
import signinAnimation from '../assets/lottie/animation.json'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { toast, ToastContainer } from 'react-toastify'

const Login = () => {

    const navigate = useNavigate()

    const mainContext = useContext(AppContext)
    const { signinWithPassword } = mainContext.authValu

    const handleLogin = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password)

        signinWithPassword(email, password)
            .then(result => {
                toast.success('Login successful!', {
                    position: "bottom-left",
                    autoClose: 2000,
                });
                setTimeout(() => {
                    navigate('/');
                }, 2500);
            })
            .catch(err => {
                toast.error('Invalied email or password', {
                    position: "bottom-left",
                    autoClose: 2000,
                });
            })
    }
    return (
        <div className='min-h-[120vh]'>
            <ToastContainer />
            <Navbar />
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-[40vw] lg:w-[25vw] lg:ml-20">
                        <Lottie animationData={signinAnimation} />;
                    </div>
                    <div>
                        <h4>Sign In</h4>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary -mt-4">Login</button>

                                    <p className='mt-3'>Don't have an account ? <Link className='text-green-500 hover:underline' to='/signup'>Click here</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login