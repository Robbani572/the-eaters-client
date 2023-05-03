import React from 'react';
import first from '../../../assets/1.jpg'
import second from '../../../assets/2.jpg'
import third from '../../../assets/3.jpg'

const RightNav = () => {
    return (
        <div className='card bg-base-100 shadow-xl p-8'>
            <h3 className='text-2xl font-bold text-center'>More Recipes</h3>
            <div>
                <div className='mt-8'>
                    <img className='rounded' src={first} alt="" />
                    <h4 className='text-center text-2xl font-semibold'>Item 1</h4>
                </div>
                <div className='mt-8'>
                    <img className='rounded' src={second} alt="" />
                    <h4 className='text-center text-2xl font-semibold'>Item 2</h4>
                </div>
                <div className='mt-8'>
                    <img className='rounded' src={third} alt="" />
                    <h4 className='text-center text-2xl font-semibold'>Item 3</h4>
                </div>
            </div>
        </div>
    );
};

export default RightNav;