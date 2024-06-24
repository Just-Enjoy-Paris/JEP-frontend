import { useEffect, useState } from "react"
import axios from "axios"
import "./messagerie.css"

const Messagerie = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("/messages")
        setMessages(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchMessages()
  }, [])

  return (
    <main>
      <div className="messagerie">
        <h1>Messagerie</h1>
        <ul>
          {Array.isArray(messages) &&
            messages.map(message => (
              <li key={message._id}>
                <strong>{message.username}:</strong> {message.message}
              </li>
            ))}
        </ul>
      </div>
    </main>
  )
}

export default Messagerie
