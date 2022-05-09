import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Spinner from '../Spinner/Spinner';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const location=useLocation()
    const from = location.state?.from?.pathname || "/" 
    const emailRef = useRef()
    const passwordRef = useRef()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
      if(loading){
        return <Spinner></Spinner>
    }
      if(user){
        navigate(from,{replace:true})
        }
    const handleSubmit = event =>{
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password)
    }
    const handleResetPass = async()=>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email)
            toast('Send Verification')
        }
        else{
            toast('Please Enter Email')
        }
    }
    return (
       <div className='viwe-port'>
            <div className='w-100 mt-5'>
           <div className='form-container'>
           <Form onSubmit={handleSubmit}>
            <h2 className='text-center bg-dark text-white py-2'>Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                {
                    error && <p className='text-danger'>Error: {error?.message}</p>
                }
                <div className='d-flex justify-content-between'>
                <p onClick={handleResetPass} className='text-primary forget-pass'>Forget Password</p>
                <p>New To Car House?<Link className='ms-2' to="/register">Register</Link></p>
                </div>
                <Button className='d-block mx-auto w-50' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
           </div>
        </div>
       </div>
    );
};

export default Login;