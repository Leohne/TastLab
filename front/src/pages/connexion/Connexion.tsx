import React, { useState } from 'react';
import loginFunction from '../../utils/loginFunction';
import { useNavigate } from 'react-router-dom';

function Connexion() {


    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('calling handleSearch with:', userLogin);
        const login = await loginFunction(userLogin, userPassword);
        if (login.status) {
            console.log(login.message);
            navigate("/")
        }
        else {
            console.log(login.message);
        }


    };


    return (<>
        <div className='flex justify-center'>
            <div className='flex flex-col w-1/4 p-5 my-20 text-center bg-white rounded-[16px] '> 
                <h2 className='font-Sugar text-4xl text-[#341f16] py-7'>Connexion</h2>               
                <form onSubmit={handleLogin} className='flex flex-col'>
                    <input className='form' type="email" placeholder="Utilisateur / Email" value={userLogin} onChange={(e) => setUserLogin(e.target.value)} />
                    <input className='form' type="password" placeholder='Mot de passe' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                    <button className='text-[#341f16] w-1/5 mx-auto rounded-[10px] hover:bg-[#CB9D6C] hover:text-white ' type="submit">Se connecter</button>
                </form>


                <div className="justify-self justify-center mt-5">
                    <p>Not a user ? </p>
                    <a href="/sign-up"> Create an account</a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Connexion