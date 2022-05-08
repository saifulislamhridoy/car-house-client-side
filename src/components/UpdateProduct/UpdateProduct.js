import React from 'react';
import useProductDetail from '../../hooks/useProductDetail';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const [product] = useProductDetail()
    const {_id,img,itemName,price,quantity,description,supplierName}=product
    const handleDeliver = (product,id)=>{
    const newQuantity = parseInt(product.quantity)-1
    console.log(newQuantity)
    }
    return (
        <div>
            <div className="card shadow p-3 bg-body rounded mb-3 update-pd">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{itemName}</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Quantity: {quantity}</h6>
                            <h6>Supplier: {supplierName}</h6>
                            <p className="card-text">{description?.slice(0,80)}</p>
                            <input className='inp-field' type="number" name="" id="" placeholder='Quantity'/>
                            <button className='btn bg-primary text-white'>Restock</button>
                            <button onClick={()=>handleDeliver(product,_id)} className='mt-4 d-block mx-auto btn bg-danger text-white'>Deliver</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;