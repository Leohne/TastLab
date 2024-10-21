import React from 'react';
import ConnectButton from './ConnectButton'

import SearchBar from './SearchBar';
import Aside from './Aside';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className='flex flex-row justify-between bg-[#CB9D6C] py-2 text-center-blue-600 h-16 w-full'>
            <Aside />
            <NavLink to='/' className='font-Sugar text-6xl text-white'>TasteLab</NavLink>
            <SearchBar />
            <ConnectButton />

        </div>
    );
};

export default Header;