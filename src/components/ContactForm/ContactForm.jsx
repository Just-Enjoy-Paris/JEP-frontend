import "./contactForm.css"
import { useState } from "react"

const ContactForm = () => {
  const [pseudo, setPseudo] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    // Traitement du formulaire (envoi des données au serveur, etc.)
  }

  return (
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
        onChange={e => setPseudo(e.target.value)}
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
