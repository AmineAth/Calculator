import React from 'react'
import "./button.css"

const Button = ({symbole,color,backColor,handleClick}) => {
  return (
    <div 
    onClick={()=>handleClick(symbole)}
    className='button' style={{color:color,backgroundColor:backColor}}>
      {symbole}
    </div>
  )
}

export default Button
