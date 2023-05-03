import React from "react";

const Price = ({price}) => {
    return (
        <div className="mt-12 bg-stone-800 shadow-xl rounded-md p-5 text-white flex flex-col">
            <h4 className="text-center">
                <span className="text-4xl font-bold">${price.price}</span>
                <span>/month</span>
            </h4>
            <p className="pt-4 text-3xl font-semibold text-center">{price.name}</p>
            <h6 className="pt-4 underline text-2xl">Features:</h6>
            {
                price.features.map(feature => <li key={feature.length}>{feature}</li>)
            }
            <button className="btn w-full p-2 font-semibold rounded-md mt-auto bg-white text-black">Buy Now</button>
        </div>
    )
};

export default Price;