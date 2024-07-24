import React from 'react'
import Button from 'react-bootstrap/Button'
import  CloseButton from 'react-bootstrap/CloseButton'
import Alert from 'react-bootstrap/Alert'
import Nav from 'react-bootstrap/Nav'
import  Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import { Form } from 'react-bootstrap'
import  {Search ,  Cart4}  from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
const Header = ({firstName}) => {
  return (
    <>

    <Alert key={"dark"} variant='dark' style={{textAlign:"center", color:"#999fa8" , background:"black"}}>
                Sing Up and get 20% off your first order. <Alert.Link href='/registration' style={{color:"white"}}>Sing Up Now</Alert.Link>
        <CloseButton style={{color:"white"}}/>
    </Alert>
    <div style={{textAlign:"", borderBottom:"1px solid" , height:"50px"}}>
    <Nav 
        style={{width:"auto" , margin:"10px 10vw"}}
      activeKey="/"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item style={{display:"flex",alignItems:"center" , height:"100%"}}>
        <Link to={"/"}style={{fontSize:"20px", fontFamily:"monospace", color:"black"}} >Shop.co</Link>
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

    <Form>
        <InputGroup>
            <Form.Control style={{border:"2px solid hrey",width:"30vw", marginBottom:"20px"}} type="text"  placeholder='Search'/>
            <InputGroup.Text style={{width:"38px", height:"38px"}}><Search/></InputGroup.Text>
        </InputGroup>
    </Form>
    <Nav.Item style={{marginLeft:"5vw"}}>
      {firstName}

    </Nav.Item>
    <Nav.Item style={{marginLeft:"5vw"}}>
     <Link to={"/cart"}>

      <Cart4/>
     </Link>
      

    </Nav.Item>
    </Nav>
  
    </div>
  </>

  )
}

export default Header