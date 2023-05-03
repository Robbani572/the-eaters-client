import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData()
    const { _id, title, img, chefName, chefExperience, likes, description, numRecipes, chefImg } = food;
    return (
        <div className='card bg-base-100 shadow-xl p-8'>
            <h3 className='text-2xl font-bold first-letter'>DETAILS ABOUT: <span className='text-orange-500'>{title}</span></h3>
            <div className='mt-8'>
                <img className='w-full h-96 rounded-md' src={img} alt="" />
                <div className='flex justify-between items-center mt-8'>
                    <div className='flex items-center'>
                        <img className='h-16 w-16 rounded-full' src={chefImg} alt="" />
                        <div className='ml-4'>
                            <h4 className='text-xl font-semibold'>{chefName}</h4>
                            <p>Experience: {chefExperience}</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <FaThumbsUp className='h-6 w-6'></FaThumbsUp>
                        <p className='text-gray-800 text-2xl font-bold ml-4'><small>{likes}</small></p>
                    </div>
                </div>
                <div className='mt-8'>
                    <h3 className='text-2xl font-semibold mb-6'>How to cook: {title}</h3>
                    <p>{description}</p>
                </div>
                <div className='text-xl font-semibold mt-8'>
                    <h4>Numbers of recipes by {chefName}: {numRecipes}...<Link>See More</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;