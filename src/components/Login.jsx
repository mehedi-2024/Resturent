
import Lottie from 'lottie-react'
import React from 'react'
import signinAnimation from '../assets/lottie/animation.json'
import Navbar from './Navbar'

const Login = () => {
    return (
        <div className='min-h-[120vh]'>
            <Navbar />
            <div className="hero mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-[40vw] lg:w-[25vw] lg:ml-20">
                        <Lottie animationData={signinAnimation} />;
                    </div>
                    <div>
                        <h4>Sign In</h4>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
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