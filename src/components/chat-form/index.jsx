import React, { useState } from 'react'

import './index.scss'

import { gql, useMutation } from '@apollo/client'
import { getApolloClient } from '../../utils/getApolloClient'

const client = getApolloClient()

const ADD_CHAT_MUTATION = gql`
  mutation AddChat($message: String!, $date: String!) {
    addChat(message: $message, date: $date) {
      message
      date
    }
  }
`

export default function ChatForm() {
  const [message, setMessage] = useState('')
  const [addChat, { data, loading, error }] = useMutation(ADD_CHAT_MUTATION)

  const handleInput = event => {
    setMessage(event.target.value)
  }
  const handleSubmit = async event => {
    event.preventDefault()
    console.log(message)
    addChat({ variables: { message: 'Hello', date: new Date().toISOString() } })
  }

  console.log(data, loading, error)

  if (loading) return 'Submitting...'
  if (error) return `Submission error! ${error.message}`
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input onChange={handleInput} type="text" className="input" />
      <button type="submit" className="button">
        Send
      </button>
    </form>
  )
}