import { useRef } from "react";

const ChatForm = ({chatHistory,setchatHistory,generateBotResponse}) => {
const inputref=useRef();
    const handleFormsubmit=(e)=>{
        e.preventDefault();
const usermessage=inputref.current.value.trim();
if(!usermessage) return;
inputref.current.vlaue=" "
setchatHistory((history)=>[...history,{role:"user",text:usermessage}]);


setTimeout(()=>setchatHistory((history)=>[...history,{role:"model",text:"Thinking..."}]),600);
generateBotResponse([...chatHistory,{role:"user",text:usermessage}]);
console.log(usermessage)
    }
  return (
    <form action="#" className="chat-form" onSubmit={handleFormsubmit}>
    <input
    ref={inputref}
      type="text"
      placeholder="Message..."
      className="message-input"
      required
    />
    <button className="material-symbols-rounded">arrow_upward</button>
  </form>
  )
}

export default ChatForm
