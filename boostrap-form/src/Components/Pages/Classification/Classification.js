import React from 'react'
import { Row, Col } from 'react-bootstrap'
const Classification = (props) => {
    const {Products} = props;
  return (
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
  )
}

export default Classification