import React, { useEffect, useState } from 'react'
import {user} from "../Join/Join"
import socketIo from "socket.io-client"
import "./chat.css"
import sendLogo from "../images/60525.png"
import Message from "../message/Message"
import ReactScrollToBottom from "react-scroll-to-bottom"

let socket;

const ENDPOINT = "http://localhost:4500/"

const Chat = () => {

    const [id, setId] = useState("")
    const [messages, setMessages] = useState([])

    const send = ()=>{
        const message = document.getElementById('chatInput').value
        socket.emit('message',{message, id})
        document.getElementById('chatInput').value = ""
    }


    useEffect(()=>{
           socket = socketIo(ENDPOINT, {transports:['websocket']})



        socket.on('connect',()=>{
            alert('Connected')
            setId(socket.id)
        })

        console.log(socket);
        socket.emit('joined',{user})  //emit matlab data bhejna

        socket.on('welcome',(data)=>{
            console.log(data.user , data.message);
        })

        socket.on('userJoined', (data)=>{
            console.log(data.user, data.message);
        })

        socket.on('leave', (data)=>{
            console.log(data.user, data.message);
        })

        return ()=>{
            socket.emit('disconnect')
            socket.off()
            
        }
    
    },[socket])

  useEffect(()=>{
    socket.on('sendMessage', (data)=>{
        console.log(data.user, data.message, data.id);
    })
    return()=>{

    }
  })

  return (
    <div className='chatPage'>
        <div className="chatContainer">
            <div className="header"></div>
            <ReactScrollToBottom className="chatBox">
                {messages.map((item, i) => <Message message={item}/>)}
            </ReactScrollToBottom>
            <div className="inputBox">
                <input type="text" name="" id="chatInput" />
                <button onClick={send()} className='sendBtn'>
                    <img src={sendLogo} alt="Send" />
                </button>
            </div>
        </div>
       


    </div>
  )
}

export default Chat