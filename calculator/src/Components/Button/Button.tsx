import React from 'react'
import "./Button.css"
interface ButtonProps{
  value: string|number

  handleClick:(e:any)=>void
}

const Button:React.FC<ButtonProps> = (props) => {
  const {value, handleClick} = props
const onClick = ()=>{
  handleClick(value)
}
  return (
    <div className='button'>
          <button onClick={onClick} >{value}</button>
    </div>
  )
}

export default Button