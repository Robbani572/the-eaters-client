import React, { useState } from 'react';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';

const FoodDetails = () => {
    const food = useLoaderData()

    const [liked, setLiked] = useState(false)

    const handleToastifyAdded = () => {
        setLiked(!liked)
        toast('Recipe added')
    }
    const handleToastifyRemoved = () => {
        setLiked(!liked)
        toast('Recipe Removed')
    }

    const { _id, title, img, chefName, chefExperience, likes, description, numRecipes, chefImg, ingredients, rating } = food;
    console.log(ingredients)
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
                    <div className='flex items-center justify-between'>
                    <div className='cursor-pointer'>
                        {
                            liked ? <FaHeart onClick={handleToastifyRemoved} className='text-red-600 h-6 w-6' />:
                            <FaHeart onClick={handleToastifyAdded}  className='text-gray-600 h-6 w-6' />
                        }
                        <ToastContainer></ToastContainer>
                    </div>

                </div>
                </div>
                <div className='mt-8'>
                    <h3 className='text-2xl font-bold mb-6'>HOW TO COOK: {title}</h3>
                    <div className='mb-4'>
                        <h5 className='text-xl font-semibold mb-2'>Ingredients</h5>
                        <ul className='pl-2'>
                            <li>1. {ingredients.ingredient1}</li>
                            <li>2. {ingredients.ingredient2}</li>
                            <li>3. {ingredients.ingredient3}</li>
                            <li>4. {ingredients.ingredient4}</li>
                            <li>5. {ingredients.ingredient5}</li>
                        </ul>
                    </div>
                    <p>{description}</p>
                </div>
                <div className='text-xl font-semibold mt-8 flex justify-between items-center'>
                    <h4>Numbers of recipes by {chefName}: {numRecipes}...<Link>See More</Link></h4>
                    <div className='flex gap-2'>
                        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;