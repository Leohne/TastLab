import React from 'react';
import ConnectButton from './ConnectButton'
import Toggle from './Toggle';
import SearchBar from './SearchBar';


const Header = () => {
    return (
        <div>
            <Toggle />
            <SearchBar />
            <ConnectButton />

        </div>
    );
};

export default Header;