import React from 'react';
import ConnectButton from './ConnectButton'

import SearchBar from './SearchBar';
import Aside from './Aside';


const Header = () => {
    return (
        <div className='flex flex-row py-2 text-blue-600 h-16 w-full flex flex-row'>
            <Aside />
            <SearchBar />
            <ConnectButton />

        </div>
    );
};

export default Header;