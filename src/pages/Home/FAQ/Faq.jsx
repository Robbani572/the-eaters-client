import React from 'react';
import faq from '../../../assets/faq.png'

const Faq = () => {
    return (
        <div className='mt-24'>
            <h1 className="text-5xl font-bold text-center"><span className='text-orange-400'>Some</span> Common Questions about Cooking</h1>
            <div className='mt-8 md:flex lg:flex items-center gap-28 p-12'>
                <img className='p-8' src={faq} alt="" />
                <div className='p-8'>
                    <div>
                        <h3 className='text-2xl font-bold'>How to be a professional cook?</h3>
                        <p className='text-gray-600 mt-4 pl-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae inventore, quis quod ullam blanditiis quibusdam nulla laboriosam quidem, in repudiandae debitis saepe illo repellendus molestias numquam doloribus reprehenderit? Quia, sed?</p>
                    </div>
                    <div className='mt-8'>
                        <h3 className='text-2xl font-bold'>How to purchase this course?</h3>
                        <p className='text-gray-600 mt-4 pl-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae inventore, quis quod ullam blanditiis quibusdam nulla laboriosam quidem, in repudiandae debitis saepe illo repellendus molestias numquam doloribus reprehenderit? Quia, sed?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;