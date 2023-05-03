import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import RightNav from '../pages/Shared/RightNav/RightNav';

const DetailsLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8 mt-24'>
                <div className='col-span-9'>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-3'>
                    <RightNav></RightNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DetailsLayout;