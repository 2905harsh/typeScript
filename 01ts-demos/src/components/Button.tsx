import React from 'react'

const Button = (props : {label:string ; onClick : ()=> void ; disabled:boolean}) => {
  return (
    <div>
      <button onClick={props.onClick} disabled={props.disabled}>{props.label}</button>
    </div>
  )
}

export default Button