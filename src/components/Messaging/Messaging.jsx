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
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/messages`);
        const allMessages = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setMessages(allMessages);
      } catch (error) {
        console.error(error);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }
    return date.toLocaleString("fr-FR", options);
  }

  return (
    <div className="messaging">
      <h1>Messagerie</h1>
      <button onClick={handleSort}>
        Trier par date {sortOrder === "desc" ? "▼" : "▲"}
      </button>
      <div className="messages-list">
        {Array.isArray(messages) &&
          messages.map(message => (
            <div key={message._id} className="message-content">
              <div className="date-message">{formatDate(message.date)}</div>
              <div className="email-message"><strong>De la part de: </strong>{message.email}</div>
              <div className="subject-message"><strong>Sujet: </strong>{message.subject}</div>
              <div className="txt-message">
                {message.message}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Messaging
