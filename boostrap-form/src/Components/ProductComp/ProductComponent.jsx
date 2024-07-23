import React from 'react'

import {StarFill, StarHalf, Star} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'



// Assuming these are defined in the same file as ProductComponent or imported from another file

// Full Star component
const StarOut = () => (
  <span role="img" aria-label="star">
    ★
  </span>
);

// Half Star component


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

// Assuming these are your star components

// Example usage:



const ProductComponent = (props) => {

  
  const { item} = props
  return (
    <div style={{width:"22%" , height:"500px", padding:"10px", overflow:"hidden", justifyContent:"center", alignItems:"center" ,}} >
          <Card  style={{height:"400px"}}> 
      <Card.Img variant="top" width={50} style={{width:"50%",margin:"auto" ,height:"100px"}} src={item?.image} />
      <Card.Body style={{margin:"auto", display:"flex" , flexDirection:"column"}}>
        <Card.Title style={{height:"100px", overflow:"hidden"}}>{item?.title}</Card.Title>
            <div style={{display:"flex" , overflow:"hidden"}}>{calculateRatingStars(item?.rating?.rate)}</div>
        <Card.Text style={{height:"100px" , overflow:"hidden"}}>
            <p>price:$ {item?.price} </p>
            
        </Card.Text>
        <Button  style={{width:"100%", height:"40px"}} variant="light">add Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}


export default ProductComponent
