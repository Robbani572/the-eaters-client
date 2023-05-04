import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const Login = () => {

    const {user, singInUser} = useContext(AuthContext)

    // const mail = user.email;
    // const pass = user.pass;

    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';


    const handleSingInUser = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // if(email !== mail || password !== pass){
        //     setError('Email or Password are invalid')
        //     return
        // }

        singInUser(email, password)
        .then(result => {
            event.target.reset()
            const loggedUser = result.user;
            setError('')
            console.log(loggedUser)
            navigate(from)
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200 rounded-md">
            <div className="hero-content w-full md:w-2/5 lg:w-2/5 flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleSingInUser} className="card w-full shadow-2xl  bg-base-100 mt-8">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className='form-control'>
                            <label className='label items-center'>
                                <input type="checkbox" className='h-5 w-5 rounded'/>
                                <p className='text-xl text-gray-700 ml-4'><span>Remember me</span></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-stone-800">Login</button>
                        </div>
                        <div>
                            <p className='text-xl font-semibold text-gray-700'><small>Don't have an account? <Link to='/register' className='text-primary underline'>Register</Link></small></p>
                        </div>
                        <div>
                            <p className='text-xl font-semibold text-red-700'><small>{error}</small></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;