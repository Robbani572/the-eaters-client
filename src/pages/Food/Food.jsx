import React, { useState } from 'react';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';

const Food = ({ food }) => {



    const { _id, title, img, chefName, chefExperience, likes, description, chefImg, chefBio } = food;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <LazyLoad height={762}>
                <figure><img src={chefImg} alt={chefName} /></figure>
            </LazyLoad>
            <div className="card-body">
                <div className='text-center'>
                    <h2 className="text-2xl font-bold">{chefName}</h2>
                    <p className='text-xl font-semibold text-gray-600'>{chefExperience} of experience</p>
                </div>

                <p className='tex-xl font-medium text-gray-500'>
                    {
                        chefBio
                    }
                </p>
                <div className="mt-4 card-actions flex justify-between">
                    <div className='flex justify-center items-center'>
                        <FaThumbsUp className='h-6 w-6'></FaThumbsUp>
                        <p className='text-gray-800 text-2xl font-bold ml-4'><small>{likes}</small></p>
                    </div>
                    <Link to={`/foods/${_id}`} className='btn bg-stone-800'><button>Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Food;