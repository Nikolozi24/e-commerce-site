import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../../Header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {StarFill, StarHalf, Star, CheckLg} from 'react-bootstrap-icons';
import { Button, ButtonGroup ,Alert , Form} from 'react-bootstrap'
import Footer from '../../Footer'
import ProductComponent  from "../../ProductComp/ProductComponent"
import { Link } from 'react-router-dom'
import { useStore } from '../../StoreContext/StoreProvider'

const Product = () => {
    const [product , setProducts] = useState({})
    const { id } = useParams();
    const  { CartObjects, 

      setCartObject} = useStore();
    const randomNumber = (start,end)=>{

            return Math.floor(Math.random()*(end-1))+start
    }
    const StarOut = () => (
        <span role="img" aria-label="star">
          ★
        </span>
      );
      console.log(CartObjects)
    const [value, setValue]= useState(1)
      
      
      
       const calculateRatingStars = (rating) => {
        if (!rating) return null;
        const stars = [];
        const roundedRating = Math.round(rating);
        for (let i = 1; i <= 5; i++) {
          if (i <= roundedRating) {
            stars.push(<StarFill key={i} />);
          } else if (rating - roundedRating > 0.7) {
            stars.push(<StarHalf key={i} />);
          } else if (
            rating - roundedRating <= 0.7 &&
            rating - roundedRating > 0.2
          ) {
            stars.push(<StarHalf key={i} />);
          } else {
            stars.push(<Star key={i} />);
          }
        }
        return stars;
      };
      const Size = ["Small" , "Medium", "Large" , "X-Large"]
      useEffect(()=>{
        const fun = async () =>{
          await axios.get(`https://fakestoreapi.com/products/${id}`).then(
            res=>res.data
          ).then(data=>setProducts(data));
          
          
        }
        fun()
        AddRandomRec();
        AddRandomRec();
        AddRandomRec();
        AddRandomRec();
     
        
      },[id])
      const [recommendations , setReccommend] = useState([])
      function AddRandomRec  (){
       setReccommend([])
        const id1 = randomNumber(1,20);
    
      const fun = async()=>{
      await axios.get(`https://fakestoreapi.com/products/${id1}`).then(res=>res.data).then(data=>setReccommend(prev=>([...prev, data])));
        
      }
      fun();
   
    }
      
      
  return (
    <div>
    <Header/>
    <Row xs="6" style={{marginTop:"100px"}}>
    <div></div>
            <img style={{border:"1px dotted" , padding:"20px", background:"grey"}} src={product?.image} width={200}  height={200}/>
            <Col xs="5">

                <h2>{product.title}</h2>
                <span style={{display:"flex", alignItems:"center"}}>{calculateRatingStars(product?.rating?.rate)} <span style={{marginLeft:"5px"}}>{product?.rating?.rate}/5</span></span>
                <h4>${product.price}</h4>
                <p>{product.description}</p>
                <hr/>
                <span>choose size</span>
                <ul style={{display:"flex" , justifyContent:"space-around"}}>
                    {
                        Size?.map(item=>{
                            return <li><Button variant='light'>{item}</Button></li>
                        })
                    }
                </ul>
                <hr/>
                <div>

                <ButtonGroup style={{background:"grey"}}>
                    <Button variant='dark' onClick={()=>{value>1 ? setValue(prev=>prev-1) :setValue(value) }}>-</Button>
                    <Button variant='light'>{value}</Button>
                    <Button variant='dark' onClick={()=>{setValue(prev=>prev+1)}} >+</Button>
                </ButtonGroup>
                <Button  onClick ={(e)=>{setCartObject(prev=>[...prev , {...product , count:value}])}} style={{marginLeft:"10vw"}}> Add to Cart</Button>
                </div>
            
            </Col>
            
            
    </Row>
    <Row>
      <h1 className='text-center'>you might also like </h1>
      <div >
                  <ul style={{display:"flex" , width:"80%" , margin:"auto"}}>
                    {
                      recommendations?.map(item=>{
                        return <li style={{width:"25%"}} ><Link  style={{listStyleType:"none", textDecoration:"none"}}to={`/${item.id}`}><ProductComponent item={item}/></Link></li>
                      })
                    }
                  </ul>

      </div>
    </Row>
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
        
     
    
    </div>
  )
}

export default Product