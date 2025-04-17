import React from 'react'
 // adjust the path as necessary
import Catbot from './Catbot';

const Chatmessage = ({chat,index}) => {
  return (
    <div className={`message ${chat.role === "model" ? 'bot':'user'}-message`}>
        {chat.role === "model" && <Catbot />}
    <p className="message-text">{chat.text}</p>
  </div>
  )
}

export default Chatmessage
