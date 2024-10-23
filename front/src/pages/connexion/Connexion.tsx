import React, { useState } from 'react';
import loginFunction from '../../utils/loginFunction';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { login } from '../../redux-features/user'
function Connexion() {


    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('calling handleSearch with:', userLogin);
        const loginFetch = await loginFunction(userLogin, userPassword);
        if (loginFetch.status) {
            console.log(loginFetch.message);
            navigate("/")
            dispatch(login(userLogin))


        }
        else {
            console.log(loginFetch.message);
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