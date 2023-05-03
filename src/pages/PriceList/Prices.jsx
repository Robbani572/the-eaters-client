import React, { useEffect, useState } from "react";
import Price from "./Price";

const Prices = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('https://the-eaters-server-robbani572.vercel.app/price')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])


    return (
        <div className="mt-24">
            <h1 className="text-5xl font-bold text-center">Our Cooking <span className='text-orange-400'>Courses_</span></h1>
            <div className="grid md:grid-cols-3 gap-3 md:ml-16 md:mr-16">
                {
                    prices.map(price => <Price
                        key={price.id}
                        price={price}
                    ></Price>)
                }
            </div>
        </div>
    )
};

export default Prices;