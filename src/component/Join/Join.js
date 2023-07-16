import React from 'react'
import "./join.css"
import logo from "../images/logo.png"

const Join = () => {
  return (
    <div className='JoinPage'>
        <div className="JoinContainer">
            <img src={logo} alt="" />
            <h1>C Chat</h1>
            <input type="text" placeholder='Enter you name' id="joinInput" />
            <button className='joinbtn'>Log In</button>
        </div>
    </div>
  )
}

export default Join