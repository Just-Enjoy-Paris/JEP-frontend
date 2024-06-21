import "./contactForm.css"
import { useState } from "react"

const ContactForm = () => {
  // Declare state variables for pseudo, email, and message
  const [pseudo, setPseudo] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    // Form processing (sending data to server, etc.)
  }

  return (
    // Create a form with class "contactForm" and handle form submission
    <form className="contactForm" onSubmit={handleSubmit}>
      <h1 className="contactTitle">Contactez-nous !</h1>

      {/* Label and input for pseudo */}
      <label className="contactLabel" htmlFor="pseudo">
        Pseudo
      </label>
      <input
        className="contactInput"
        type="text"
        id="pseudo"
        value={pseudo}
        onChange={e => setPseudo(e.target.value)}
      />

      {/* Label and input for email */}
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

      {/* Label and textarea for message */}
      <label className="contactLabel" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Votre message ici..."
      ></textarea>

      {/* Submit button */}
      <button className="contactButton" type="submit">
        Envoyer
      </button>
    </form>
  )
}

export default ContactForm
