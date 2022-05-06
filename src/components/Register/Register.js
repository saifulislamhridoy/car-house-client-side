import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate()
    const location=useLocation()
    const from = location.state?.from?.pathname || "/" 
    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);
      if(user){
        navigate(from,{replace:true})
        }
    const handleSubmit = async(event) =>{
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
       await createUserWithEmailAndPassword(email,password)
       await updateProfile({ displayName:name });
       toast('Send Email Verification')
    //    navigate(from,{replace:true})
    }
    return (
        <div className='w-100 mt-5'>
            <Form onSubmit={handleSubmit} className='form-container'>
                <h2 className='text-center bg-dark text-white py-2'>Please Register</h2>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required/>
                </Form.Group>
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
                <div>
                    <p>Already Have An Account?<Link className='ms-2' to="/login">Login</Link></p>
                </div>
                <Button className='d-block mx-auto w-50' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;