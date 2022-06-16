import React from 'react'

const Button = (props) => {



  return (
    <div className='polje'>
    <button className='btn btn-light button' onClick={props.onClick} value={props.value}  style={{backgroundColor: props.color}}>
      
      
    {props.name}
     

    
    </button>
    </div>
  )
}

export default Button