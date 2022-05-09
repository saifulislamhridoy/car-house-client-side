import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ProductTable = ({ product }) => {
    const navigate=useNavigate()
    const [products,setProducts]=useProducts()
    const {img, itemName, _id, quantity, supplierName } = product
    const handlePdDelete =id =>{
     const proceed = window.confirm('Are You Sure')
     if(proceed){
         const url =`https://hidden-stream-82811.herokuapp.com/product/${id}`
         fetch(url,{
             method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount > 0){
      const remaining = products.filter(pd => pd._id !== id)
      setProducts(remaining)
             }
         })
     }
    }
    return (
        <>
            <tr>
                <td><img className='img-fluid' width="40px" src={img} alt="" /></td>
                <td>{itemName}</td>
                <td>{supplierName}</td>
                <td>{quantity}</td>
                <td><button onClick={()=>navigate(`/product/${_id}`)} className='btn bg-primary text-white ms-2'>Update</button><button onClick={()=>handlePdDelete(_id)} className='btn bg-danger text-white ms-2'>Delete</button></td>

            </tr>
        </>
    );
};

export default ProductTable;