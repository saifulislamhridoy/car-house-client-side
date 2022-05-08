import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCart = ({product}) => {
    const navigate = useNavigate()
    const {_id,img,itemName,price,quantity,description,supplierName}=product
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
        <div className="card" >
            <img src={img} className="card-img-top" height="250px" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{itemName}</h3>
                <h6>Price:${price}</h6>
                <h6>Quantity: {quantity}</h6>
                <h6>Supplier: {supplierName}</h6>
                <p className="card-text">{description.slice(0,70)}</p>
                <button onClick={()=>navigate(`/product/${_id}`)} className="btn btn-primary d-block mx-auto">Update</button>
            </div>
        </div>
    </div>
    );
};

export default ProductCart;