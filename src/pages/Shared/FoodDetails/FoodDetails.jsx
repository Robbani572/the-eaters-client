import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData()
    const { _id, title, img, chefName, chefExperience, likes, description, numRecipes } = food;
    return (
        <div>
            <img className='w-full h-96' src={img} alt="" />
            <div className='flex items-center'>
                <img className='h-12 w-12 rounded-full' src={img} alt="" />
                <div className='ml-4'>
                    <h4 className='text-xl font-semibold'>{chefName}</h4>
                    <p>Experience: {chefExperience}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;