import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData()
    const {_id, title, img, chefName, chefExperience, likes, description, numRecipes } = food;
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

export default FoodDetails;