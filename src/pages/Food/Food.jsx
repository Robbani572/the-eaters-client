import React from 'react';

const Food = ({food}) => {

    const {title} = food;

    return (
        <div>
            <h1>Here is the food: <span>{title}</span></h1>
        </div>
    );
};

export default Food;