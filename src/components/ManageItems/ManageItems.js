import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ProductTable from '../ProductTable/ProductTable';
import Spinner from '../Spinner/Spinner';

const ManageItems = () => {
    const navigate = useNavigate()
    const [products]=useProducts()
    if(products.length===0){
        return <Spinner></Spinner>
    }
    return (
        <div className='container viwe-port'>
            <button onClick={()=>navigate('/additem')} className='btn bg-primary text-white d-block mx-auto my-4'>Add New Item</button>
            <table className="table table-striped table-hover border">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Item Name</th>
                        <th>Supplier</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       products.map(product=> <ProductTable key={product._id} product={product}></ProductTable>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default ManageItems;