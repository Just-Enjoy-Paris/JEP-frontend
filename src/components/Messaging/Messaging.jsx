/* eslint-disable no-console */
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./messaging.css"
import { AuthContext } from "../../../context/user.context"

const Messaging = () => {
  const [messages, setMessages] = useState(null)
  const [sortOrder, setSortOrder] = useState("asc")
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/messages`)
        const sortedMessages = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        )
        setMessages(sortedMessages)
      } catch (error) {
        console.error(error)
      }
    }

    fetchMessages()
  }, [navigate])

  if (!isAuthenticated) {
    navigate("/log")
  }

  const handleSort = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc")
      setMessages(
        [...messages].sort((a, b) => new Date(b.date) - new Date(a.date))
      )
    } else {
      setSortOrder("asc")
      setMessages(
        [...messages].sort((a, b) => new Date(a.date) - new Date(b.date))
      )
    }
  }

  return (
    <div
      className="
messaging"
    >
      <h1>Messaging</h1>
      <button onClick={handleSort}>
        Trier par date {sortOrder === "desc" ? "▼" : "▲"}
      </button>
      {/* ul initialise une liste et il sont les elements dans la liste */}
      <ul>
        {Array.isArray(messages) &&
          messages.map(message => (
            <li key={message._id}>
              <ul className="date-message">{message.date}</ul>
              <ul className="email-message">{message.email}</ul>
              <ul>
                <strong>{message.username}:</strong> {message.message}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Messaging
