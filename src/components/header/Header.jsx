import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   
    return (
        <div>
   <ul className='gap-7'>
    <Link to='/' className='text-2xl text-green-700 font-bold'>Home</Link>
    <Link to='/login' className='text-2xl text-green-700 font-bold'>Login</Link>
    
   </ul>
        </div>
    );
};

export default Header;