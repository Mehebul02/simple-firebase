import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Root = () => {
    return (
        <div className='mt-32 ml-40'>
            <Header></Header>
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;