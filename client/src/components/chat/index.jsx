import React from "react";
import { useMultiChatLogic,
         MultiChatSocket,
        MultiChatWindow } from 'react-chat-engine-advanced';
import Header from "@/components/customHeader"
import StandardMessageForm from "@/components/customHeader/customMessageForms/StandardMessageForm"
import Ai from "@/components/customHeader/customMessageForms/Ai";
import AiCode from "@/components/customHeader/customMessageForms/AiCode";
import AiAssist from "@/components/customHeader/customMessageForms/AiAssist";
const Chat = () => {
  const chatProps=useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "testuser",
    "1234"
  )
  return  <div style={{flexBasis:"100%"}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow
    {...chatProps}
    style={{height:"100vh"}}
    renderChatHeader={(chat)=><Header chat={chat}/>}
    renderMessageForm={(props)=>{
      if(chatProps.chat?.title.startsWith("AiChat")){
        return <Ai props ={props} activeChat={chatProps.chat}/>
      }
      if(chatProps.chat?.title.startsWith("AiCode")){
        return <AiCode props ={props} activeChat={chatProps.chat}/>
      }
      if(chatProps.chat?.title.startsWith("AiAssist")){
        return <AiAssist props ={props} activeChat={chatProps.chat}/>
      }
      return(
        <StandardMessageForm props = {props} activeChat = {chatProps.chat}/>
      )
    }
  }
    />
  </div>
}
export default Chat;