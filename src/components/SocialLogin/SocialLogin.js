import React from 'react';
import './SocialLogin.css'
import google from '../../social/google.png'
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleLogin = ()=>{
        signInWithGoogle()
    }
    if(user){
     navigate('/home')
    }
    return (
        <div>
            <div className='d-flex mt-4 align-items-center'>
                <div className='hr-line'></div>
                <p className='mt-3 mx-2'>Or</p>
                <div className='hr-line'></div>
            </div>
            {
                error && <p className='text-danger text-center'>Error: {error?.message}</p>
            }
            <button onClick={handleGoogleLogin} className='d-block mx-auto rounded bg-white border border-primary w-50 py-2 d-flex justify-content-around align-items-center'>
                <img className='google-size' src={google} alt="" />
                Google Login
                </button>
        </div>
    );
};

export default SocialLogin;