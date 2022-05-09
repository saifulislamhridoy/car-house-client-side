import React from 'react';
import { useEffect, useState } from "react";
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useMyItems from '../../hooks/useMyItems';
import MyItemCard from '../MyItemCard/MyItemCard';

const MyItems = () => {
   const [myItems]=useMyItems()
    return (
        <div className='container'>
            <h2 className='text-center mt-3'>My Items</h2>
            <div className='row'>
            {
                myItems.map(myItem => <MyItemCard key={myItem._id} myItem={myItem}></MyItemCard>)
            }
            </div>
        </div>
    );
};

export default MyItems;