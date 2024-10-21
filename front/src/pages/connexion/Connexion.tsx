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
        <div>

            <form onSubmit={handleLogin}>
                <input type="email" placeholder="votre email" value={userLogin} onChange={(e) => setUserLogin(e.target.value)} />
                <input type="password" placeholder='Votre mot de passe' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                <button type="submit">Se connecter</button>
            </form>


            <div className="justify-self justify-center">
                <p>Not a user ? </p>
                <a href="/sign-up"> Create an account</a>
            </div>
        </div>
    </>
    )
}

export default Connexion