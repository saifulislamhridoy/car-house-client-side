import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useMyItems = () => {
    const [user, loading] = useAuthState(auth)
    const [myItems,setMyItems]=useState([])
    useEffect(()=>{
        const email = user.email
        const url=`https://hidden-stream-82811.herokuapp.com/myitems?email=${email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyItems(data))
    },[user,myItems])
    return [myItems,setMyItems]
};

export default useMyItems;