import React, { useState } from 'react'
import "./ProductComponent.css"

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

// Assuming these are defined in the same file as ProductComponent or imported from another file

// Full Star component

// Half Star component


export interface item {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}
interface ProductType{
    item:item;
}

 const calculateRatingStars = (rating) => {
  if (!rating) return null;
  const stars = [];
  const roundedRating = Math.round(rating);
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<StarIcon key={i} />);
    } else if (rating - roundedRating > 0.7) {
      stars.push(<StarIcon key={i} />);
    } else if (
      rating - roundedRating <= 0.7 &&
      rating - roundedRating > 0.2
    ) {
      stars.push(<StarHalfIcon key={i} />);
    } else {
      stars.push(<StarOutlineIcon key={i} />);
    }
  }
  return stars;
};

// Assuming these are your star components

// Example usage:



const ProductComponent:React.FC<ProductType> = (props) => {

  const [isFront , setIsFront] = useState(true) 
  const { item} = props
  return (
    <div>
          <ul className='Product-component' onMouseLeave={()=>{ setTimeout(()=> {setIsFront(true)}, 100)}} onMouseEnter={()=>{setIsFront(false)}}>
              <li><img src={item.image} width={100}/></li>
              {  isFront && <li id="item-title">{item?.title}</li>}
             { isFront && <div>
                {calculateRatingStars(item?.rating?.rate)}
              </div>}
              {isFront && <li>${item?.price}</li>}
              {!isFront &&<li>{item.description}</li>}
              
          </ul>
        
    </div>
  )
}


export default ProductComponent