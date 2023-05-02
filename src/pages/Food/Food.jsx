import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Food = ({ food }) => {

    const [liked, setLiked] = useState(false)

    const handleToastifyAdded = () => {
        setLiked(!liked)
        toast('Recipe added')
    }
    const handleToastifyRemoved = () => {
        setLiked(!liked)
        toast('Recipe Removed')
    }

    const {_id, title, img, chefName, chefExperience, likes, description, numRecipes } = food;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">{title}</h2>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img className='h-12 w-12 rounded-full' src={img} alt="" />
                        <div className='ml-4'>
                            <h4 className='text-xl font-semibold'>{chefName}</h4>
                            <p>Experience: {chefExperience}</p>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        {
                            liked ? <FaHeart onClick={handleToastifyRemoved} className='text-red-600 h-6 w-6' />:
                            <FaHeart onClick={handleToastifyAdded}  className='text-gray-600 h-6 w-6' />
                        }
                        <ToastContainer></ToastContainer>
                    </div>

                </div>
                <p className='tex-xl font-medium text-gray-500'>
                    {
                        description.length < 250 ? <>{description}</> : <>{description.slice(0, 250)}...<Link to={`/foods/${_id}`} className='text-xl font-bold'>Show More</Link></>
                    }
                </p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default Food;