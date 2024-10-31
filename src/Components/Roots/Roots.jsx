import React from 'react';

import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const Roots = () => {
    return (
        <div className='mx-auto w-11/12'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;