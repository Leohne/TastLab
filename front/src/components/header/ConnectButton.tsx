import { useState } from 'react';
import { Link } from 'react-router-dom';

const ConnectButton = () => {
    const [connected, setconnected] = useState(true)
    const [isExpanded, setIsExpanded] = useState(false)
    
    return (
        <div className='pr-2 w-1/5'>
            <Link to="/login" className={`${connected ? 'hidden' : ''}`}>
                <div className='text-center'>
                    <button aria-label="connexion" className='py-3 bg-white-200 hover:text-white'>Connectez Vous</button>
                </div>
            </Link>
            <div className={`text-center ${connected ? '' : 'hidden'}`}>
                <button aria-label="user" onClick={() => setIsExpanded(!isExpanded)}  className='py-3 pr-4 bg-white-200 hover:text-white'>Username</button> {
                isExpanded && <ul className='mt-4 rounded-[16px] bg-[#CB9D6C] text-white relative z-10'>
                <li>
                    <Link to="/account"> {/* ajouter /:id */}
                        <button onClick={() => {setIsExpanded(!isExpanded)}} className='w-full h-full'>Mon compte</button>
                    </Link>
                </li>
                <li>
                    <Link to="/add-recipe">
                        <button onClick={() => {setIsExpanded(!isExpanded)}} className='w-full h-full'>Ajouter une recette</button>
                    </Link>
                </li>
                <li>
                    <button onClick={() => {setIsExpanded(!isExpanded); setconnected(!connected)}} className='w-full h-full'>Déconnexion</button>
                </li>
            </ul>
        }
            </div>
        </div>
    )
}

export default ConnectButton;