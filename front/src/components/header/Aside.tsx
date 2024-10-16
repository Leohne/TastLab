import React from 'react';
import { useState } from 'react';


const Aside = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    return (<div className='text-blue-600 h-16 w-1/5 py-2'>
        <button onClick={() => setIsExpanded(!isExpanded)}
            className='w-full'
        >
            {isExpanded ? 'Parcourir les recettes' : ' . . . '}
        </button> {
            isExpanded && <ul>
                <li><button>Entrées</button>
                </li>
                <li><button>Plats</button>
                </li>
                <li><button>Desserts</button>
                </li>
                <li><button>Français</button>
                </li>
                <li><button>Italien</button></li>
                <li><button>Rapide</button></li>
                <li><button>léger</button></li>
                <li><button>Economique</button></li>
                <li><button>Gateaux</button></li>
                <li><button>Tartes</button></li>
            </ul>

        }
    </div>);

};

export default Aside;