import React from 'react'
 // adjust the path as necessary
import Catbot from './Catbot';

const Chatmessage = ({chat,index}) => {
  return (
    !chat.hideInChat && (
    <div className={`message ${chat.role === "model" ? 'bot':'user'}-message ${chat.isError ? 'error' :""}`}>
        {chat.role === "model" && <Catbot />}
    <p className="message-text">{chat.text}</p>
  </div>
  )
)
}

export default Chatmessage
