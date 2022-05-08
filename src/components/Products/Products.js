import React from 'react';
import useProducts from '../../hooks/useProducts';
import ProductCart from '../ProductCart/ProductCart';
import Spinner from '../Spinner/Spinner';

const Products = () => {
    const [products]=useProducts()
   
    return (
        <div className='container'>
            <h2 className='text-center mt-4'>Products</h2>
            {
          products.length===0 && <Spinner></Spinner>
            }
            <div className='row'>
            {
                products.slice(0,6).map(product => <ProductCart key={product._id} product={product}></ProductCart>)
            }
            </div>
        </div>
    );
};

export default Products;