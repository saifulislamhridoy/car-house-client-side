import { useEffect, useState } from "react"

const useProducts =()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const url = 'https://hidden-stream-82811.herokuapp.com/product'
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products,setProducts]
}
export default useProducts;