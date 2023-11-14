import React from 'react'

import './index.scss'

import { gql, useSuspenseQuery } from '@apollo/client'
import { getApolloClient } from '../../utils/getApolloClient'

const GET_DATA = gql`
  query GetData {
    chats {
      message
      date
    }
  }
`

export default function ChatList() {
  const { error, data: chatList } = useSuspenseQuery(GET_DATA)

  if (error) {
    return <span>에러가 발생했습니다.</span>
  }
  return (
    <section className="chat-room">
      {chatList?.chats.map((chat, index) => (
        <Chat chat={chat} key={index} />
      ))}
    </section>
  )
}

function Chat({ chat }) {
  return <span className="chat">{chat.message}</span>
}
