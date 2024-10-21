import React from 'react';
import { Link } from 'react-router-dom';

const ConnectButton = () => {
    return (
        <div className=' w-1/5'>
            <Link to="/login"><button className='bg-white-200'>Connectez Vous</button></Link>
        </div>
    );
};

export default ConnectButton;