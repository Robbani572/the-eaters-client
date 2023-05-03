import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { createUser, updateUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target
        const displayName = form.name.value;
        const email = form.email.value;
        const photoURL = form.url.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)

        setSuccess('')
        setError('')

        const re = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])/;

        console.log(name, email, password, confirm)

        if (password !== confirm) {
            setError("Password doesn't match")
            console.log(error)
            return
        }
        else if (password.length < 7) {
            setError('Password must contain 8 characters')
            return
        }
        else if(re.test(password) === false){
            setError('make a storng password')
            return
        }

        else {
            createUser(email, password)
                .then(result => {
                    event.target.reset()
                    const createdUser = result.user;
                    setSuccess('Account created successfully')
                    setError('')

                    console.log(createdUser)
                    updateUser(displayName, photoURL)
                    .then()
                    .catch(error => {
                        console.log(error)
                    })
                    console.log(createdUser)
                })
                .catch(error => {
                    console.log(error)
                    setError(error.message)
                })

        }

    }

    return (
        <div className="hero min-h-screen bg-base-200 rounded-md">
            <div className="hero-content w-2/5 flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <form onSubmit={handleRegister} className="card w-full shadow-2xl  bg-base-100 mt-8">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo_Url</span>
                            </label>
                            <input type="text" name='url' placeholder="url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="confirm" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className='form-control'>
                            <label className='label items-center'>
                                <input type="checkbox" className='h-5 w-5' required />
                                <p className='text-xl text-gray-700 ml-4'><span>Accept our Terms and Conditions</span></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-stone-800">Register</button>
                        </div>
                        <div>
                            <p className='text-xl font-semibold text-gray-700'><small>Already have an account? <Link to='/login' className='text-primary underline'>Login</Link></small></p>
                        </div>
                        <div>
                            <p className='text-xl font-semibold text-green-700'><small>{success}</small></p>
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

export default Register;