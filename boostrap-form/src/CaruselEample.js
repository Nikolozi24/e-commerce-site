import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample ({Products=[]}) {
  const [myProducts , setMyProducts ] =useState([])
  useEffect(()=>{
    setMyProducts([Products?.[0] , Products?.[1] , Products?.[2], Products?.[3]])
  },[Products])
  
  return (
  
    <Carousel data-bs-theme="dark" fade={true} >

    {
          myProducts?.map(product=>{
            
           return      <Carousel.Item className='w-100'  key={product?.id} style={{display:"inline-block", flexDirection:"row",padding:"20px",width:"100%" , background:"#f0f4fa",height:"600px"}}>
          <img
          className='m-auto d-block'
              src={product?.image}
          style={{opacity:"1.7", background:"none", height:"400px",width:"40%"}}
          />
        <Carousel.Caption style={{background:"" , width:"40%", margin:"auto" ,color:"black", }} className=''>
          <h5>{product?.title}</h5>
          <p>${product?.price}</p>
          <Button style={{background:"black", color:"white"}}>Shop Now</Button>
        </Carousel.Caption>

      </Carousel.Item>
          }
          )
    }
    
    </Carousel>
  );
}

export default UncontrolledExample;