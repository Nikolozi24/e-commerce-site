import React, {useContext , createContext, useState, useEffect} from 'react'

export const context  = createContext()
export const  useStore =()=> useContext(context)


const StoreProvider = ({children}) => {
    const [sum, setSum] = useState(0);
    const [CartObjects , setCartObject] = useState([])
    const calCulateSum = ()=>{
        let sumer = 0;
       CartObjects?.map(item=>{
        sumer+=((item.price)*item.count)
       })

       setSum(sumer);
    }
    useEffect(()=>{
        calCulateSum();

    })

const store = {
    CartObjects, 
    setCartObject,
    sum
}

  return (
    <context.Provider  value={store}>{children}</context.Provider>
  )
}

export default StoreProvider