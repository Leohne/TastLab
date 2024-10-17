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

    return (<div>
        <button onClick={() => setIsExpanded(!isExpanded)}>
            . . .
        </button> {
            isExpanded && <ul>
                <li><button onClick={() => handleSearch("entree")} className='w-full h-full'>Entrée</button>
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