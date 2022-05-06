import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = event =>{
        event.preventDefault()
    }
    return (
        <div onSubmit={handleSubmit} className='w-100 mt-5'>
            <Form className='w-50 mx-auto border border-dark p-2'>
            <h2 className='text-center bg-dark text-white py-2'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                <p className='text-primary cursor-pointer'>Forget Password</p>
                <p>New To Car House?<Link className='ms-2' to="/register">Please Register</Link></p>
                </div>
                <Button className='d-block mx-auto w-50' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;