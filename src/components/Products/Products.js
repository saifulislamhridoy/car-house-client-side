import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ProductCart from '../ProductCart/ProductCart';
import Spinner from '../Spinner/Spinner';

const Products = () => {
    const [products]=useProducts()
    const navigate = useNavigate()
   
    return (
        <div className='container'>
            <h2 className='text-center mt-4 text-primary'>Products</h2>
            {
          products.length===0 && <Spinner></Spinner>
            }
            <div className='row'>
            {
                products.slice(0,6).map(product => <ProductCart key={product._id} product={product}></ProductCart>)
            }
            </div>
            <button onClick={()=>navigate('/manageitems')} className='btn bg-primary text-white d-block mx-auto mt-4'>Manage Inventories</button>
        </div>
    );
};

export default Products;