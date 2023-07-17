import React, { useEffect } from 'react'
import {user} from "../Join/Join"
import socketIo from "socket.io-client"
import "./chat.css"
import sendLogo from "../images/60525.png"

const ENDPOINT = "http://localhost:4500/"

const Chat = () => {

    const socket = socketIo(ENDPOINT, {transports:['websocket']})

    useEffect(()=>{
        socket.on('connect',()=>{
            alert('connected')
        })

        console.log(socket);
        socket.emit('joined',{user})  //emit matlab data bhejna

        socket.on('welcome',(data)=>{
            console.log(data.user , data.message);
        })

        socket.on('userJoined', (data)=>{
            console.log(data.user, data.message);
        })

        return ()=>{
            socket.emit('disconnect')
            socket.off()
            
        }
    
    },[socket])



  return (
    <div className='chatPage'>
        <div className="chatContainer">
            <div className="header"></div>
            <div className="chatBox"></div>
            <div className="inputBox">
                <input type="text" name="" id="chatInput" />
                <button className='sendBtn'>
                    <img src={sendLogo} alt="Send" />
                </button>
            </div>
        </div>
       


    </div>
  )
}

export default Chat