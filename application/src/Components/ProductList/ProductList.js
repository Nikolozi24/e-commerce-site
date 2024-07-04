import React , {useState , useEffect} from 'react'
import axios from 'axios'
import "./ProductLIst.css"
import ProductComponent from '../ProductComponent/ProductComponent.tsx'
const ProductList = () => {
    const [Products,setProducts]   =useState([{}]);
    useEffect(()=>{
        const fun = async () =>{
                const response = axios("https://fakestoreapi.com/products", {
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then(res=>res.data). then(data=>setProducts(data));
        }
        fun();
    },[]) 
    return (
    <div className='product-list'>
            <ul className='product-list'>
                {
                    Products?.map(product=>{
                            return <li className='bg-red'><ProductComponent item={product}/></li>


                    })
                }

            </ul>

    
    </div>
  )
}

export default ProductList