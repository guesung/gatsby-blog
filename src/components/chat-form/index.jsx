import React, { useState } from 'react'

import './index.scss'

export default function ChatForm() {
  const [message, setMessage] = useState('')
  const handleInput = event => {
    setMessage(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    console.log(message)
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input onChange={handleInput} type="text" className="input" />
      <button type="submit" className="button">
        Send
      </button>
    </form>
  )
}
