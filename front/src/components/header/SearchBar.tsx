import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateToSearch } from '../../utils/navigateToSearch';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('calling handleSearch with:', searchTerm);
        navigateToSearch(navigate, searchTerm);

    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <form className='flex flex-row' onSubmit={handleSearch}>
            <input
                className='w-3/5 h-full bg-white rounded'
                type='text'
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Tapez votre recherche ici..."
            />
            <button className='w-2/5' type="submit">Rechercher</button>
        </form>
    );
};

export default SearchBar;
