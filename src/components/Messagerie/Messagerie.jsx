import { useEffect, useState } from "react"
import axios from "axios"
import "./messagerie.css"

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
    <main>
      <div className="messagerie">
        <h1>Messagerie</h1>
        <ul>
          {Array.isArray(messages) && messages.map(message => (
            <li key={message._id}>
              <strong>{message.pseudo}:</strong> {message.message}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Messagerie
