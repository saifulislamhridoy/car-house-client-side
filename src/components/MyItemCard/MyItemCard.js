import React from 'react';
import useMyItems from '../../hooks/useMyItems';

const MyItemCard = ({myItem}) => {
    const [myItems,setMyItems]=useMyItems()
    const {_id,img,itemName,price,quantity,description,supplierName}=myItem
    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure')
     if(proceed){
         const url =`https://hidden-stream-82811.herokuapp.com/product/${id}`
         fetch(url,{
             method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount > 0){
      const remaining = myItems.filter(pd => pd._id !== id)
      setMyItems(remaining)
             }
         })
     }
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
        <div className="card bg-body rounded shadow" >
            <img src={img} className="card-img-top" height="250px" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{itemName}</h3>
                <h6>Price:${price}</h6>
                <h6>Quantity: {quantity}</h6>
                <h6>Supplier: {supplierName}</h6>
                <p className="card-text">{description.slice(0,70)}</p>
               <button onClick={()=>handleDelete(_id)} className='btn bg-danger text-white'>Delete</button>
            </div>
        </div>
    </div>
    );
};

export default MyItemCard;