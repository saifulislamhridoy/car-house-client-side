import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = event =>{
        event.preventDefault()
    }
    return (
        <div onSubmit={handleSubmit} className='w-100 mt-5'>
            <Form className='w-50 mx-auto border border-dark p-2'>
                <h2 className='text-center bg-dark text-white py-2'>Please Register</h2>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <p className='text-primary cursor-pointer'>Forget Password</p>
                    <p>Already Have An Account?<Link className='ms-2' to="/login">Please Login</Link></p>
                </div>
                <Button className='d-block mx-auto w-50' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;