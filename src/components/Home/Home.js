import React from 'react';
import Banner from '../Banner/Banner';
import FutureProduct from '../FutureProduct/FutureProduct';
import Location from '../Location/Location';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <FutureProduct></FutureProduct>
            <Location></Location>
        </div>
    );
};

export default Home;