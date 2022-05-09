import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductDetail from '../../hooks/useProductDetail';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const { productId } = useParams()
    const [product, setProduct] = useProductDetail()
    const { img, itemName, price, quantity, description, supplierName } = product
    // Restock
    const handleStock = (event) => {
        event.preventDefault()
        const stock = event.target.quantity.value
        if (stock) {
            const stockQuantity = parseInt(quantity) + parseInt(stock)
            fetch(`https://hidden-stream-82811.herokuapp.com/pd/${productId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ stockQuantity })
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    setProduct({ ...product, quantity: stockQuantity })
                    toast('Stock Success')
                })
            event.target.reset()
        }

    }
    // Deliver
    const handleDeliver = (product) => {
        const newQuantity = parseInt(product.quantity) - 1
        fetch(`https://hidden-stream-82811.herokuapp.com/product/${productId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setProduct({ ...product, quantity: newQuantity })
                toast('Success Delivered')
            })
    }
    return (
        <div className='viwe-port'>
            <div className="card shadow p-3 bg-body rounded mb-3 update-pd">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{itemName}</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Quantity: {quantity}</h6>
                            <h6>Supplier: {supplierName}</h6>
                            <p className="card-text">{description?.slice(0, 80)}</p>
                            <form onSubmit={handleStock}>
                                <input className='inp-field' type="number" name="quantity" id="" placeholder='Quantity'/>
                                <input className='btn bg-primary text-white ' type="submit" value="Restock" />
                            </form>
                            <button onClick={() => handleDeliver(product)} className='mt-4 d-block mx-auto btn bg-danger text-white'>Deliver</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;