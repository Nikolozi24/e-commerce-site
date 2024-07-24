import React from 'react'
import { Row , Col } from 'react-bootstrap'

const CartComponent = (props) => {
    const {item} = props
  return (
    <div style={{width:"80%" ,margin:"auto" ,borderBottom:"1px solid" , padding:"20px" , borderRadius:"0px"}}>
        <Row  style={{margin:"auto" , width:"100%"}} >
            <img style={{width:"15%"}} src={item?.image} />
           <Col xs="8">

            <div>
                    <ul>
                        <li><h3>{item?.title}</h3></li>
                        <li><h3><strong>cost:</strong> ${item?.price}</h3></li>
                        <li><h3><strong>Item quantity: </strong> {item?.count}</h3></li>
                    </ul>
            </div>
           </Col>
          
        </Row>
       
    </div>
  )
}

export default CartComponent