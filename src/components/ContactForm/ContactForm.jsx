/* eslint-disable no-console */
import "./contactForm.css"
import { useState, useContext } from "react"
import { AuthContext } from "../../../context/user.context"
import axios from "axios"
import toast from "react-hot-toast"
import Button from "../Button/Button"

const ContactForm = () => {
  const { user } = useContext(AuthContext)
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState(user ? user.email : "")
  const [message, setMessage] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const url = user
        ? `${import.meta.env.VITE_API_URL}/user/sendMessage`
        : `${import.meta.env.VITE_API_URL}/sendMessage`
      const res = await axios.post(
        url,
        {
          email,
          subject,
          message
        },
        { withCredentials: true }
      )
      toast(res.data.message)
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (error) {
      console.error(error)
      toast("Une erreur s'est produite lors de l'envoi du message.")
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <h1 className="contactTitle">Contactez-nous !</h1>

      <label className="contactLabel" htmlFor="email">
        Email
      </label>
      <input
        className="contactInput"
        type="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <label className="contactLabel" htmlFor="subject">
        Sujet
      </label>
      <input
        className="contactInput"
        type="text"
        id="subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />

      <label className="contactLabel" htmlFor="message">
        Message
      </label>
      <textarea
        className="contactInput"
        id="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Votre message ici..."
      ></textarea>

      {/* Submit button */}
      <Button name="Envoyer" className="contactButton" type="submit" />
    </form>
  )
}

export default ContactForm
