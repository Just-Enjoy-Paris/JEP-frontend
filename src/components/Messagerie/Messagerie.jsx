import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./messagerie.css"
import { AuthContext } from "../../../context/user.context"

const Messagerie = () => {
  const [messages, setMessages] = useState([])
  const [sortOrder, setSortOrder] = useState("asc")
  const navigate = useNavigate()
  const {isAuthenticated} = useContext(AuthContext)

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

    const checkAuth = () => {
      if (!isAuthenticated) {
        navigate("/log")
      }
    }

    checkAuth()
    fetchMessages()
  }, [isAuthenticated, navigate])

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
    <main>
      <div className="messagerie">
        <h1>Messagerie</h1>
        <button onClick={handleSort}>
          Trier par date {sortOrder === "desc" ? "▼" : "▲"}
        </button>
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
    </main>
  )
}

export default Messagerie
