import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import auth from '../FirebseInit';

const SocialLogin = () => {
    const provider = new GoogleAuthProvider()



    const handleGoogle =()=>{
        signInWithPopup(auth,provider)
        .then(res =>{

        })
        .catch(err =>{
            
        })
    }
    return (
        <div>
            <h1 className='font-semibold my-2'>Login With</h1>
            <div className='space-y-3'>
                <button onClick={handleGoogle} className="btn hover:bg-green-400 w-full"><FaGoogle /> Login With Google</button>
                <button className="btn hover:bg-green-400 w-full"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;