import React, {useEffect, useState} from "react";
import UncontrolledExample from "../../CaruselEample";
import Header from "../Header";
import { Alert , Button, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductComponent from "../ProductComp/ProductComponent.jsx"
import { motion, useScroll } from "framer-motion"
import Footer from "../Footer";
import GetCookie from "../Utilities/Cookies/GetCookie.tsx"
import TypewriterComponent from "typewriter-effect";
import Classification from "./Classification/Classification.js";
import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const [person, setPerson] = useState({firstName:""})
  const [Products, setProducts] = useState([{
    id:1,
  }]);
  const handleComponentClick = (e) => {
    // Navigate only if the click was not on the button
    if (e.target.closest('button')) {
      // If the click is on a button, do nothing
      return;
    }
    // Navigate to the product detail page

  };

  useEffect(()=>{
    const  first = GetCookie("firstname");
    const jwt = GetCookie("jwt");
    if(!jwt){
      navigate('/login')
    }
    setPerson({firstName:first})
      const fun = async()=>{
       await fetch('https://fakestoreapi.com/products')
       .then(res=>res.json())
       .then(json=>setProducts(json));
      }
      fun();
      
    },[])
    return (
     GetCookie("jwt") && <>

    <Header firstName={person.firstName} />
      <motion.div   />  
    {/*  render Carusel */}
      <UncontrolledExample Products={Products}/>
      {/* Companies rendering */}
      <Alert style={{background:"black" , color:"white" ,}}variant="dark">
        <Row xs="5" style={{height:"100px",}}>
          <Col style={{ fontFamily:"sans-serif",  display:"flex", alignItems:"center", textAlign:"center" ,fontSize:"20px"}}>VERSAGE</Col>
          <Col style={{ fontFamily:"sans-serif",  display:"flex", alignItems:"center", textAlign:"center" ,fontSize:"20px"}}>ZIRA</Col>
          <Col style={{ fontFamily:"sans-serif",  display:"flex", alignItems:"center", textAlign:"center" ,fontSize:"20px"}}>GUCCI</Col>
          <Col style={{ fontFamily:"sans-serif",  display:"flex", alignItems:"center", textAlign:"center" ,fontSize:"20px"}}>PRADA</Col>
          <Col style={{ fontFamily:"sans-serif",  display:"flex", alignItems:"center", textAlign:"center" ,fontSize:"20px"}}>Calvin KELIN</Col>
        </Row>

      </Alert>
      
       <h1 className="text-center first-letter:uppercase">New Arrivals</h1>
    
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, dur:200 }} >
    <ul style={{width:"70%", margin:"auto",display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>

       {
        Products?.map( product=>{
          return <li   onClick ={(e)=>{handleComponentClick(e)}} style={{width:'22%', listStyleType:"none"}}> <Link style={{listStyleType:"none" , textDecoration:"none"}} to={`/${product.id}`}> <ProductComponent item={product}/></Link></li>
        })
       }
    </ul>
    </motion.div>
    <hr/>
  {/* browsing bt dress style  just for testing.
         now working yet! */}
    <Classification Products = {Products}/>
{/*  footer */}
    <Alert style={{margin:"30px auto",marginTop:"30px" , width:"70%", height:"200px", background:"black", color:"white"}}>
      <Row xs="2">
        <h1>
      <TypewriterComponent options={{
        
        strings:['<span style="color:green">STAY</span> UPTO DATE <span style="color:green">ABOUT</span> OUR LAST OFFERS', 'You can buy anything <span style="color:green">you want</span>'],
       autoStart:true,
       loop:true,
     
      }}
      >
       
      </TypewriterComponent>
        </h1>

     <Form >
        <Form.Control style={{textAlign:"center"}} type="text" placeholder="example@gmail.com"></Form.Control>
      <Button  variant="light" style={{margin:"20px auto", width:"80%"}}>Subscribe to Newsletter</Button>
     </Form>
      </Row>

    </Alert>
    <Footer/>
   
    </>
  );
}

export default Main;