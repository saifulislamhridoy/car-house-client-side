import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='viwe-port'>
           <div className='container'>
           <div className='about-bg my-2 p-3'>
                <h2 className='text-center text-primary'>COMPANY PROFILE</h2>
                <p>Inaugurated in 1993 â€œCar House Limitedâ€ has been a strong seller of both brand new and reconditioned vehicles. With the grace of Almighty Allah Car House can boast a strong sales and after sales service record in the heart of customers.</p>
                <p>Car House Limitedâ€ a leading name in car business is founded by Mr. Anwar Hossain. Initially the showroom consisted of a space which allowed 15 vehicles to be displayed but with time we have increased our display space to 40 vehicles inside the showroom and 20 vehicles outside.</p>
            </div>
            <div  className='about-bg my-2 p-3'>
                <h2 className='text-center text-primary'>Car House Ltd.</h2>
                <p>Address: 105, Kakrail Road, Dhaka, Bangladesh, 1000</p>
                <p>Phone: 0185000000</p>
                <p>Email: carhouse@gmail.com</p>
            </div>
           </div>
        </div>
    );
};

export default About;