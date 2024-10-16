import React from 'react';
import ConnectButton from './ConnectButton'

import SearchBar from './SearchBar';


const Header = () => {
    return (
        <div className='flex flex-row py-2 text-blue-600 absolute top-0 right-0 h-16 w-4/5 flex flex-row'>

            <SearchBar />
            <ConnectButton />

        </div>
    );
};

export default Header;