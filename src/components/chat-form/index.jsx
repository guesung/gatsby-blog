import React, { useState } from 'react'

import './index.scss'

import { gql, useMutation } from '@apollo/client'

const ADD_CHAT_MUTATION = gql`
  mutation AddChat($message: String!, $date: String!) {
    addChat(message: $message, date: $date) {
      message
      date
    }
  }
`

export default function ChatForm({ refetch }) {
  const [message, setMessage] = useState('')
  const [addChat, { data, loading, error }] = useMutation(ADD_CHAT_MUTATION)

  const handleInput = event => {
    setMessage(event.target.value)
  }
  const handleSubmit = async event => {
    event.stopPropagation()
    await addChat({
      variables: {
        message,
        date: new Date().toISOString(),
      },
    })
    await refetch()
    setMessage('')
    document.body.scrollIntoView(false)
  }
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
