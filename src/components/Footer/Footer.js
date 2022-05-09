import React from 'react';

const Footer = () => {
    const date = new Date()
    let year = date.getFullYear()
    return (
        <div className='bg-dark py-4'>
        <p className='text-white d-flex justify-content-center align-items-center'>Copyright &copy; {year} by <span className='text-danger mx-1'>Car</span>House</p> 
     </div>
    );
};

export default Footer;