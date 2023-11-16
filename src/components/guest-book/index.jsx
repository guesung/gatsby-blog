import React from 'react'
import ChatList from '../chat-list'
import ChatForm from '../chat-form'

import { gql, useSuspenseQuery } from '@apollo/client'

const GET_DATA = gql`
  query GetData {
    chats {
      message
      date
    }
  }
`

export default function GuestBook() {
  const { error, data: chatList } = useSuspenseQuery(GET_DATA)

  if (error) {
    return <span>에러가 발생했습니다.</span>
  }
  return (
    <>
      <h1>Guest Book</h1>
      <ChatList chatList={chatList} />
      <ChatForm />
    </>
  )
}
