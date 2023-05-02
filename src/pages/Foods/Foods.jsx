import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://the-eaters-server-robbani572.vercel.app/foods')
            .then(res => res.json())
            .then(data => setFoods(data.slice(0, 3)))
            .catch(error => console.error(error))
    }, [])

    const handleFullDataLoad = () => {
        useEffect(() => {
            fetch('https://the-eaters-server-robbani572.vercel.app/foods')
                .then(res => res.json())
                .then(data => setFoods(data))
                .catch(error => console.error(error))
        }, [])
    }

    return (
        <div className='mt-24'>
            <h1 className="text-5xl font-bold text-center">Bengali <span className='text-orange-400'>Recipes_</span></h1>
            <div className='grid grid-cols-3 mt-12'>
                {
                    foods.map(food => <Food
                        key={food._id}
                        food={food}
                    ></Food>)
                }
            </div>

            <div className='flex justify-center'>
                <button className='btn bg-stone-800'>More</button>
            </div>
        </div>
    );
};

export default Foods;