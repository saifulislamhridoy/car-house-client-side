import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const useProductDetail = () =>{
    const {productId}=useParams()
    const [product,setProduct]=useState({})
    useEffect(()=>{
        fetch(`https://hidden-stream-82811.herokuapp.com/product/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return [product,setProduct]
}
export default useProductDetail;