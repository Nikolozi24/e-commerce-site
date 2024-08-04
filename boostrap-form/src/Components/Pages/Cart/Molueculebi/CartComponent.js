import React, { useState } from 'react'
import { Row , Col, Button  } from 'react-bootstrap'
import { Trash3 , Pencil } from "react-bootstrap-icons"
import { useStore } from '../../../StoreContext/StoreProvider'
import Modal from 'react-bootstrap/Modal';
const CartComponent = (props) => {
    const {item , index} = props
    const [isModalOpen , setIsModalOpen] = useState(false)
    const [countValue, setCountValue] = useState(0)
    const {CartObjects , setCartObject} = useStore();
    const handleEdit = (e)=>{
        setIsModalOpen(true)
    }
    const handleSave = (e)=>{
          e.preventDefault();
          CartObjects[index].count = countValue;
    setIsModalOpen(false)
        }
  return (
    item?.id &&    <div style={{width:"80%" ,margin:"auto" ,borderBottom:"1px solid" , padding:"20px" , borderRadius:"0px"}}>
        <Row  style={{margin:"auto" , width:"100%"}} >
            <img style={{width:"15%"}} src={item?.image} />
           <Col xs="8">

            <div >
                    <ul>
                        <li><h3>{item?.title}</h3></li>
                        <li><h3><strong>cost:</strong> ${item?.price}</h3></li>
                        <li><h3><strong>Item quantity: </strong> {item?.count} <Button onClick={(e)=>{handleEdit(e)}}><Pencil/></Button></h3></li>
                    </ul>

            </div>
           </Col>

           <Col><Button onClick={(e)=>{setCartObject(prevItems => prevItems.filter((_, i) => i !== index))}} style={{backgroundColor:"red"}}><Trash3/></Button></Col>
          
        </Row>
       {
        <Modal show={isModalOpen}>
          <Modal.Header style={{textAlign:"center"}}>
           <span>Enter count</span>
          </Modal.Header>
          <Modal.Body style={{textAlign:"center"}}>
            <input value={countValue} onChange={(e)=>{const val = e.target.value ;  setCountValue(val)}} type='text' style={{border:"2px solid grey" ,margin:"1px auto "}}  placeholder='enter count'/>
          </Modal.Body>
          <Modal.Footer>
              <Button onClick={(e)=>{e.preventDefault(); setIsModalOpen(false)}}>cancel</Button>
              <Button onClick={(e)=>{handleSave(e)}}>save</Button>
          </Modal.Footer>


        </Modal>
       }
    </div>
  )
}

export default CartComponent