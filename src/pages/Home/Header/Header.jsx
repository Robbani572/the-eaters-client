import React from 'react';
import hero from '../../../assets/hero-icon1.png'
import LazyLoad from 'react-lazy-load';

const Header = () => {
    return (
        <div className="bg-base-200 mt-24">
            <div className="flex lg:flex-row md:flex-row items-center p-12 justify-between flex-col-reverse gap-4">
                <div className='flex-grow-1'>
                    <h1 className="text-5xl font-bold">Live for Eat. <span className='text-orange-400'>Die for Eat |.</span></h1>
                    <p className="mt-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut</p>
                    <button className="btn bg-stone-800 mt-4">Get Started</button>
                </div>

                <div className='flex-grow-1'>
                    <LazyLoad height={762}>
                        <img src={hero} className="w-full rounded-lg shadow-2xl" />
                    </LazyLoad>
                </div>

            </div>
        </div>
    );
};

export default Header;