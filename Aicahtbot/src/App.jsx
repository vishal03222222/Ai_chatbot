import { useRef, useState } from "react";
import Catbot from "./components/Catbot";
import ChatForm from "./components/ChatForm";
import Chatmessage from "./components/chatmessage";

const App = () => {
  const chatbodyref=useRef()

  const[chatHistory,setchatHistory]=useState([]);
  const generateBotResponse=async(history)=>{
const updateHistory=()=>{
  setchatHistory(prev => [...prev.filter(msg=>msg.text !== "Thinking..."),{role:"model",text}])
}

    history=history.amp(({role,text})=>({role,parts:[{text}]}))
const requestoptions={
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({contents: history})
}
try{
  const  response=await fetch(import.meta.env.VITE_API_URL,requestoptions);
  const data=await response.json()
  if(!response.ok)throw new Error(data.error.message || "Something went wrong");

  const apiResponseText=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();
  updateHistory(apiResponseText);
    console.log(data)
}catch(error){
  console.log(error)
}
  }
  return (
    <div className="container">
      <div className="chatbot-popup">

        <div className="chat-header">
          <div className="header-info">
            <Catbot/>
            <h2 className="logo-text">Chatbot</h2>

          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>
        <div className="chat-body">
  <div className="message bot-message">
    <Catbot />
    <p className="message-text">
      Hey there 👋 <br /> How can I help you today?
    </p>
  </div>
{chatHistory.map((chat,index)=>{
  <Chatmessage key={index} chat={chat}/>
})}
 
</div>

<div className="chat-footer">
 <ChatForm chatHistory={chatHistory} setchatHistory={setchatHistory} generateBotResponse={generateBotResponse}/>
</div>


      </div>
    </div>
  );
};

export default App;
