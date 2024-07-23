import React from 'react'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import { TwitterX, Facebook, Instagram , Github} from 'react-bootstrap-icons'
const Footer = () => {
  return (
    <div style={{padding:"100px 5% ", marginTop:"-100px",background:"#f0f0f0", fontStyle:"bold" , fontSize:"20px"}}>
            <Row xs="5">
                <ul>
                    <li><h1>SHOP.CO</h1></li> 
                    <li> <p style={{justifyItems:"center",
                    fontFamily:"sans-serif", fontSize:"15px"}} >we have clother that suits your style and which you're proud to wear. from woman to men</p></li> 
                    <li>
                        <ul style={{display:"flex", width:"80%" ,justifyContent:"space-around"}}>
                            <li><TwitterX/></li>
                            <li><Facebook/></li>
                            <li><Instagram/></li>
                            <li><Github/></li>
                        </ul>


                    </li>
                </ul>
                <ul>
                    <li><h3>Company</h3></li>
                    <li>about</li>
                    <li>feature</li>
                    <li>work</li>
                    <li>Career</li>
                </ul>
                <ul>
                    <li><h3>Help</h3></li>
                    <li>Costumer Support</li>
                    <li>Delivery Details</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
                <ul>
                    <li><h3>FAQ</h3></li>
                    <li>Account</li>
                    <li>Manage Deliveries</li>
                    <li>Orders</li>
                    <li>Payments</li>
                </ul>
                <ul>
                    <li><h3>Resources</h3></li>
                    <li>Free eBooks</li>
                    <li>Development Tutorial</li>
                    <li>How to - Blog</li>
                    <li>Youtube Playlist</li>
                </ul>
               
            </Row>
                        <hr/>
    </div>
  )
}

export default Footer