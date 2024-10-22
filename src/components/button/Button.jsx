import React from 'react'
import './Button.css'
function Button({text , bgm , size}) {
  const buttonStyle = {
    ...size && { width: "150px" }, 
    ...(bgm
      ? { color: "#008080", backgroundColor: "white", border: "2px solid #008080", width: "180px" }
      : { backgroundColor: "#008080", color: "white" }), 
  };
  return (
    <div className='btn-main-con'style={buttonStyle}>
      <p>{text}</p>
    </div>
  )
}

export default Button
