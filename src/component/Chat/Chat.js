import React, { useEffect } from 'react'
import {user} from "../Join/Join"
import socketIo from "socket.io-client"

const ENDPOINT = "http://localhost/4500/"

const Chat = () => {

    const socket = socketIo(ENDPOINT, {transports:['websocket']})

    useEffect(()=>{
        socket.on('connet',()=>{
            alert('connected')
        })

        return ()=>{
            
        }
    
    },[socket])



  return (
    <div className='chatPage'>
        <div className="chatContainer">
            <div className="header"></div>
            <div className="chatBox"></div>
            <div className="inputBox"></div>
        </div>
       


    </div>
  )
}

export default Chat