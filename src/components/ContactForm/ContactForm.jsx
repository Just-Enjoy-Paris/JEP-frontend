import "./contactForm.css"
import { useState, useContext } from "react"
import { AuthContext } from "../../../context/user.context"
import axios from "axios"

const ContactForm = () => {
  // Declare state variables for pseudo, email, and message
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // Get user pseudo from AuthContext
  const { user } = useContext(AuthContext)
  const pseudo = user ? user.account.username : ""

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      // Send request to server to submit contact form
      const response = await axios.post("/contact", {
        pseudo,
        email,
        message,
      })
      // Display success message to user based on server response
      alert(response.data.message)
      // Clear form fields
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error(error)
      // Display error message to user
      alert("Une erreur s'est produite lors de l'envoi du message.")
    }
  }
  

  return (
    // Create a form with class "contactForm" and handle form submission
    <form className="contactForm" onSubmit={handleSubmit}>
      <h1 className="contactTitle">Contactez-nous !</h1>

      <label className="contactLabel" htmlFor="pseudo">
        Pseudo
      </label>
      <input
        className="contactInput"
        type="text"
        id="pseudo"
        value={pseudo}
        readOnly
      />

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

      <label className="contactLabel" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Votre message ici..."
      ></textarea>

      <button className="contactButton" type="submit">
        Envoyer
      </button>
    </form>
  )
}

export default ContactForm
