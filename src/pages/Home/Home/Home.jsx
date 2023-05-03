import React from 'react';
import Header from '../Header/Header';
import Foods from '../../Foods/Foods';
import Prices from '../../PriceList/Prices';
import Faq from '../FAQ/Faq';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Foods></Foods>
            
            <Prices></Prices>
        </div>
    );
};

export default Home;