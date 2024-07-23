import React from 'react'
import Button from 'react-bootstrap/Button'
import  CloseButton from 'react-bootstrap/CloseButton'
import Alert from 'react-bootstrap/Alert'
import Nav from 'react-bootstrap/Nav'
import  Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl  from 'react-bootstrap/FormControl'
import { Form } from 'react-bootstrap'
import  {Search}  from 'react-bootstrap-icons'
const Header = () => {
  return (
    <>

    <Alert key={"dark"} variant='dark' style={{textAlign:"center", color:"#999fa8" , background:"black"}}>
                Sing Up and get 20% off your first order. <Alert.Link href='/registration' style={{color:"white"}}>Sing Up Now</Alert.Link>
        <CloseButton style={{color:"white"}}/>
    </Alert>
    <div style={{textAlign:"", borderBottom:"1px solid" , height:"50px"}}>
    <Nav 
        style={{width:"auto" , margin:"10px 10vw"}}
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item style={{display:"flex",alignItems:"center" , height:"100%"}}>
        <Nav.Link style={{fontSize:"20px", fontFamily:"monospace", color:"black"}} href="/home">Shop.co</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  href="#/action-1">on Sale</Dropdown.Item>
        <Dropdown.Item href="#/action-2">brands</Dropdown.Item>
        <Dropdown.Item href="#/action-3">new Arivals</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link   style={{color:"black"}} eventKey="link-1">On Sale</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color:"black"}} eventKey="link-2">Brands</Nav.Link>
      </Nav.Item>
   <Nav.Item>
   </Nav.Item>
    <Form>
        <InputGroup>
            <Form.Control style={{border:"2px solid hrey",width:"30vw", marginBottom:"20px"}} type="text"  placeholder='Search'/>
            <InputGroup.Text style={{width:"38px", height:"38px"}}><Search/></InputGroup.Text>
        </InputGroup>
    </Form>
    </Nav>
        
    </div>
  </>

  )
}

export default Header