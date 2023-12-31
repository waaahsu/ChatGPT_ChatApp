import React from 'react'
import {ChatBubbleLeftRightIcon, PhoneIcon} from "@heroicons/react/24/solid" 
const CustomHeader=({chat})=> {
  return(
    <div className="chat-header">
      <div>
        <ChatBubbleLeftRightIcon className="icon-chat"/>
        <h3 className='header-text'>{chat.title}</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="i+con-phone"/>
        {chat.description!=="Loading..." ? 
        (<p className="header-text">{chat.description}</p>):
        (<p className="header-text">No chat selected</p>)}
      </div>
    </div>
  )
}

export default CustomHeader