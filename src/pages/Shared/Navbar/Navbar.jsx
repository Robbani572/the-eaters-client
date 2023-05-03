import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo1.png'
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="navbar bg-base-100 flex md:flex-row lg:flex-row flex-col justify-between items-center">
            <div className="">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="">
                <ul className="menu menu-horizontal">
                    <Link className='p-4 text-xl font-bold mx-2 hover:text-orange-600 duration-200' to="/">Home</Link>
                    <Link className='p-4 text-xl font-bold mx-2 hover:text-orange-600 duration-200' to="/about">About</Link>
                </ul>
            </div>
            <div className='flex gap-4 relative'>
                {
                    user && <img className='h-14 w-14 rounded-full cursor-pointer' src={user.photoURL} alt="" />
                }
                {
                    user && <p className='text-gray-700 absolute opacity-0 hover:opacity-100 transition'><small>{user.displayName}</small></p>
                }
                {
                    user ? <Link onClick={handleSignOut}><button className='btn bg-stone-800'>Log out</button></Link> :
                        <Link to='/login'><button className='btn bg-stone-800'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;