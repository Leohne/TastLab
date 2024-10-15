import React from 'react';
import ConnectButton from './ConnectButton'
import Toggle from './toggle';
import SearchBar from './searchBar';


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