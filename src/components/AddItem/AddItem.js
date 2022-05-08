import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user]=useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url ='http://localhost:5000/product'
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
           if(result){
               reset()
           }
        })
        toast('Added Product')
    };
    return (
        <div className='form-container mt-5'>
          <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-center bg-dark text-white py-2'>Add Item</h2>
                <input className='mb-3' placeholder='Item Name' type="text" {...register("itemName", { required: true})} />
                <input className='mb-3' placeholder='Photo Url' {...register("img",{ required: true})} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price",{ required: true})} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity",{ required: true})} />
                <input className='mb-3' placeholder='Supplier Name' type="text" {...register("supplierName", { required: true })} />
                <input className='mb-3' value={user?.email} placeholder='Email' {...register("email", { required: true})} />
                <textarea className='mb-3' placeholder='Description' {...register("description",{ required: true})} />
                <input className='bg-danger text-white' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;