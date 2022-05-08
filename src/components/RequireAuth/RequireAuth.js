import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
      auth)
    const location = useLocation();
    if (loading) {
      return <Spinner></Spinner>
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
      return <div>
        <div className='text-center mt-5'>
        <h2>Your Email Address not Verified</h2>
        <h3>Please Verify Your Email</h3>
        <p>{user?.email}</p>
        <button className='btn btn-primary'
          onClick={async () => {
            await sendEmailVerification();
            toast('Send verification');
          }}
        >
         Send Verify email
        </button>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    }
    return children;
  };
  
  export default RequireAuth;