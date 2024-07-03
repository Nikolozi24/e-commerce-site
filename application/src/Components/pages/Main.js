import { useEffect, useState } from 'react'
import React  from 'react'
import GetCookie from '../Utilities/Cookies/GetCookie.tsx'
import ProductList from '../ProductList/ProductList.js'
const Main = () => {
    const [name, setName] = useState({
        firstname:"",
        lastname:""
    })
    useEffect(()=>{
            const fname = GetCookie("firstname");
            const lname = GetCookie("lastname");
            setName({firstname:fname, lastname:lname});


    },[])
  return (
    <div><h1>hello :{ name.firstname + " "+name.lastname}</h1>
    
        <ProductList/>
    </div>
  )
}

export default Main