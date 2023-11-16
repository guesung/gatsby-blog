import React, { useEffect, useRef } from 'react'

import './index.scss'

export default function ChatList({ chatList }) {
  const messageEndRef = useRef(null)

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [chatList])

  return (
    <section className="chat-room">
      <div ref={messageEndRef} />
      {[...chatList.chats].reverse().map((chat, index) => (
        <Chat chat={chat} key={index} />
      ))}
    </section>
  )
}

function Chat({ chat }) {
  return <span className="chat">{chat.message}</span>
}
