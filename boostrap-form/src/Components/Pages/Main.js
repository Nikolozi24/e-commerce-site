import React, {useEffect, useState} from "react";
import UncontrolledExample from "../../CaruselEample";
import Header from "../Header";
import { Alert , Button, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductComponent from "../ProductComp/ProductComponent.jsx"
import { motion, useScroll } from "framer-motion"
import Footer from "../Footer";


function Main() {
  const { scrollYProgress } = useScroll();
  const [Products, setProducts] = useState([]);

  useEffect(()=>{
      const fun = async()=>{
       await fetch('https://fakestoreapi.com/products')
       .then(res=>res.json())
       .then(json=>setProducts(json));
      }
      fun();
      
    },[])
    return (
      <>
    <Header/>
      <motion.div   />  
      <UncontrolledExample Products={Products}/>
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
          return <ProductComponent item={product}/>
        })
       }
    </ul>
    </motion.div>
    <hr/>
    <div style={{margin:"auto", width:"80%" , height:"930px", borderRadius:"20px",backgroundColor:"#f0f0f0"}}> 
        <h1 className="text-center">BROWSE BY DRESS STYLE</h1>
      <Row xs="10"   style={{margin:"10px 10%" , width:"100%"}}>
        <Col xs="4" style={{fontSize:"20px" , background:"white", padding:"20px", display:"flex" , border:"1px solid", borderRadius:"20px"}}>
        <span>Casual</span>
        <img  style={{width:"50%"}}  src={Products[0]?.image}></img>          
             </Col>
        <Col xs="6" style={{fontSize:"20px" , background:"white", padding:"20px", display:"flex" , border:"1px solid", marginLeft:"20px", borderRadius:"20px"}}>
          <span>formal</span>
        <img style={{width:"50%"}}  src={Products[5]?.image}/>
        </Col>
      </Row>
      <Row  xs="10"   style={{margin:"10px 10%" , width:"100%"}}>
        <Col xs="6" style={{fontSize:"20px" , background:"white", padding:"20px", display:"flex" , border:"1px solid", borderRadius:"20px"}}>
        <span>Party</span>
        <img style={{width:"50%"}}    src={Products[7]?.image}></img>          
             </Col>
        <Col xs="4" style={{fontSize:"20px" , background:"white", padding:"20px", display:"flex" , border:"1px solid", marginLeft:"20px", borderRadius:"20px"}}>
          <span>Digital</span>
        <img style={{width:"50%"}} src={Products[11]?.image}/>
        </Col>
      </Row>
    </div>

    <Alert style={{margin:"30px auto",marginTop:"30px" , width:"70%", height:"200px", background:"black", color:"white"}}>
      <Row xs="2">
        <h1>STAY UPTO DATE ABOU OUR LAST OFFERS</h1>
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