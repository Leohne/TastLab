import { useState } from 'react';
import loginFunction from '../../utils/loginFunction';


function Signup () {
    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('calling handleSearch with:', userLogin);
        const loginFetch = await loginFunction(userLogin, userPassword);
        if (loginFetch.status) {
            console.log(loginFetch.message);
        }
        else {
            console.log(loginFetch.message);
        }
    };
    {/*Revoir la logique pour envoyer les info d'inscription */}

return (<>
    <div className='flex justify-center h-auto'>
        <div className='flex flex-col w-2/4 p-5 my-20 text-center bg-white rounded-[16px] '> 
            <h2 className='font-Sugar text-4xl text-[#341f16] py-7'>Inscription</h2>               
            <form onSubmit={handleLogin} className='flex flex-col'>
                <label className='flex justify-start ml-[21%]' htmlFor="email">Utilisateur/Email</label>
                <input className='form' type="email" id='email' value={userLogin} onChange={(e) => setUserLogin(e.target.value)} required />
                <label className='flex justify-start ml-[21%]' htmlFor="password">Mot de passe</label>
                <input className='form' type="password" id='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required />
                <button className='text-[#341f16] w-1/5 mx-auto rounded-[10px] hover:bg-[#CB9D6C] hover:text-white ' type="submit">S'inscrire</button>
            </form>
        </div>
    </div>
</>
)
}

export default Signup