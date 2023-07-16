import React from 'react'
import "./join.css"
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

let user;

const Join = () => {
    const sendUser = () =>{
        user = document.getElementById('joinInput').value
    }
  return (
    <div className='JoinPage'>
        <div className="JoinContainer">
            <img src={logo} alt="" />
            <h1>C Chat</h1>
            <input type="text" placeholder='Enter you name' id="joinInput" />
            <Link to="/chat">
            <button className='joinbtn'>Log In</button>
            </Link>
        </div>
    </div>
  )
}

export default Join