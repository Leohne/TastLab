import React from 'react';
import { Link } from 'react-router-dom';

const ConnectButton = () => {
    return (
        <div className='text-center w-1/5'>
            <Link to="/login"><button className='py-3 bg-white-200'>Connectez Vous</button></Link>
        </div>
    );
};

export default ConnectButton;