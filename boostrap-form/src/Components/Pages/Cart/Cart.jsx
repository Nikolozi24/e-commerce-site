import React from 'react'
import { useStore } from '../../StoreContext/StoreProvider'
import Header from '../../Header';
import CartComponent from './Molueculebi/CartComponent';
const Cart = () => {
const {CartObjects , sum} = useStore();
 
  return (
    <div >
    <Header/>

    <h1 className='text-center'>your cart</h1>
    <div style={{padding:"20px 4px" , border:"1px solid grey" , margin:"auto" , width:"80%" , borderRadius:"20px"}}>
      {/* just render products for carts */}
        {
           CartObjects.map((item, index)=>{
                return <CartComponent item={item} index={index}/>
           })
        }
    </div>
    <h1>ToTal : {sum}</h1>
    </div>
  )
}

export default Cart