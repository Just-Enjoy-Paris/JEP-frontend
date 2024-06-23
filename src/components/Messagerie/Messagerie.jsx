import { useEffect, useState } from "react"
import axios from "axios"

const Messagerie = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get("/messages")
      setMessages(response.data)
    }

    fetchMessages()
  }, [])

  return (
    <div>
      <h1>Messagerie</h1>
      <ul>
        {messages.map(message => (
          <li key={message._id}>
            <strong>{message.pseudo}:</strong> {message.message}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Messagerie
