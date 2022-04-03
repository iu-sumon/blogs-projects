import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png'
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <header className='flex justify-between items-center px-20 bg-green-500'>
            <Link to='/'> <img  src={logo} alt="" /> </Link>

             <nav className='flex justify-center items-center gap-5'>
                 <CustomLink to='/'>Home</CustomLink>
                 <CustomLink to='/videos'>Videos</CustomLink>
                 <CustomLink to='/login'>Login</CustomLink>
             </nav>

        </header>
    );
};

export default Header;