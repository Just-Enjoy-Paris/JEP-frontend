import { useEffect, useState } from "react"
import axios from "axios"
import "./messagerie.css"

const Messagerie = () => {
  const [messages, setMessages] = useState([])
  const [sortOrder, setSortOrder] = useState("asc")

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/messages`)
        const sortedMessages = res.data.sort((a, b) => new Date(b.date) - new Date(a.date))
        setMessages(sortedMessages)
      } catch (error) {
        console.error(error)
      }
    }

    fetchMessages()
  }, [])

  const handleSort = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
      setMessages([...messages].sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else {
      setSortOrder("asc");
      setMessages([...messages].sort((a, b) => new Date(a.date) - new Date(b.date)));
    }
  }

  return (
    <main>
      <div className="messagerie">
        <h1>Messagerie</h1>
        <button onClick={handleSort}>Trier par date {sortOrder === "desc" ? "▼" : "▲"}</button>
        <ul>
          {Array.isArray(messages) &&
            messages.map(message => (
              <li key={message._id}>
                <ul>{message.date}</ul>
                <strong>{message.username}:</strong> {message.message}
              </li>
            ))}
        </ul>
      </div>
    </main>
  )
}

export default Messagerie
