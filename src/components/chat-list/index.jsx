import React from 'react'

import './index.scss'

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
  useSuspenseQuery,
} from '@apollo/client'
import { apoolloClient } from '../../utils/getApoolloClient'

const client = getApoolloClient()

const GET_DATA = gql`
  query GetData {
    chats {
      message
      date
    }
  }
`

export default function ChatList() {
  const { error, data: chatList } = useSuspenseQuery(GET_DATA, { client })

  if (error) {
    return <span>에러가 발생했습니다.</span>
  }
  return (
    <section className="chat-room">
      {chatList?.chats.map(chat => (
        <Chat chat={chat} key={chat.date} />
      ))}
    </section>
  )
}

function Chat({ chat }) {
  return <span className="chat">{chat.message}</span>
}
