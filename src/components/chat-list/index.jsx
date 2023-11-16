import React from 'react'

import './index.scss'

export default function ChatList({ chatList }) {
  return (
    <section className="chat-room">
      {chatList.chats.map((chat, index) => (
        <Chat chat={chat} key={index} />
      ))}
    </section>
  )
}

function Chat({ chat }) {
  return <span className="chat">{chat.message}</span>
}
