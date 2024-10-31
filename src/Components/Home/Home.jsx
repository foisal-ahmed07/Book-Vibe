import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;