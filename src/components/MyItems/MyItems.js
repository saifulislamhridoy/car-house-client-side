import React from 'react';
import useMyItems from '../../hooks/useMyItems';
import MyItemCard from '../MyItemCard/MyItemCard';
import Spinner from '../Spinner/Spinner';

const MyItems = () => {
   const [myItems]=useMyItems()
   if(myItems.length===0){
       return <Spinner></Spinner>
   }
    return (
        <div className='container pb-3'>
            <h2 className='text-center mt-3 text-primary'>My Items</h2>
            <div className='row'>
            {
                myItems.map(myItem => <MyItemCard key={myItem._id} myItem={myItem}></MyItemCard>)
            }
            </div>
        </div>
    );
};

export default MyItems;