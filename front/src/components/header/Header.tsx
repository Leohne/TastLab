import ConnectButton from './ConnectButton'

import SearchBar from './SearchBar';
import Aside from './Aside';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header className='flex flex-row justify-between bg-[#CB9D6C] py-2 text-center-blue-600 h-16 w-full rounded-b-[16px]'>
            <Aside />
            <NavLink to='/' className='font-Sugar text-6xl text-white'>TasteLab</NavLink>
            <SearchBar />
            <ConnectButton />
        </header>
    );
};

export default Header;