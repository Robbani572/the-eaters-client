import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png'

const Navbar = () => {

    const [user, setUser] = useState(null)
    
    return (
        <div className="navbar bg-base-100 flex md:flex-row lg:flex-row flex-col justify-between items-center">
            <div className="">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="">
                <ul className="menu menu-horizontal">
                   <Link className='p-4 text-xl font-bold mx-2 hover:text-orange-600 duration-200' to="/">Home</Link>
                   <Link className='p-4 text-xl font-bold mx-2 hover:text-orange-600 duration-200' to="/about">About</Link>
                   <Link className='p-4 text-xl font-bold mx-2 hover:text-orange-600 duration-200' to="/recipes">Recipes</Link>
                </ul>
            </div>
            <div>
                {
                    user ? <Link><button className='btn bg-stone-800'>Log out</button></Link> :
                    <Link><button className='btn bg-stone-800'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;