import React from 'react';
import { useState } from 'react';
import { navigateToSearch } from '../../utils/navigateToSearch';
import { useNavigate } from 'react-router-dom';

const Aside = () => {

    const [isExpanded, setIsExpanded] = useState(false)
    const navigate = useNavigate()

    const handleSearch = (searchTerm: string) => {
        console.log('calling handleSearch')
        navigateToSearch(navigate, searchTerm);
    }

    return (
    <div className='w-[5%] text-center'>
        <button aria-label="menu" onClick={() => setIsExpanded(!isExpanded)} className='py-2 mb-5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-9">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button> {
            isExpanded && <ul className='rounded-[16px]  bg-white '>
                <li><button onClick={() => {setIsExpanded(!isExpanded); handleSearch("entree");}} className='w-full h-full'>Entrée</button>
                </li>
                <li><button onClick={() => handleSearch("entree")} className='w-full h-full'>Entrée</button>
                </li>
                <li><button onClick={() => handleSearch("entree")} className='w-full h-full'>Entrée</button>
                </li>
            </ul>
        }
    </div>);

};

export default Aside;