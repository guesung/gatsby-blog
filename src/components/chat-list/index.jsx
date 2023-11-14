import React from 'react'

import './index.scss'

export default function ChatList({ chatList }) {
  console.log(chatList)
  return (
    <section className="chat-room">
      {chatList.map(chat => (
        <Chat chat={chat} />
      ))}
    </section>
  )
}

function Chat({ chat }) {
  return <span className="chat">{chat.message}</span>
}
