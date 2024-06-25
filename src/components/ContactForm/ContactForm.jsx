import "./contactForm.css"
import { useState, useContext } from "react"
import { AuthContext } from "../../../context/user.context"
import axios from "axios"

// faire en sorte que si le user est connecté il au son username affiché ou son email et qu'il ne puisse pas le modifier
// faire en sorte que si c'est un user non connecté il donne un mail valide pour povoir envoyer son message
// virer username puisque si t'as pas de compte t'as pas de username
// remplasse addMessage pas sendMessage (back et front)

const ContactForm = () => {
  // Declare state variables for pseudo, email, and message
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // Get user pseudo from AuthContext
  const { user } = useContext(AuthContext)
  const username = user ? user.account.username : ""

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/addMessage`,
        {
          username,
          email,
          message
        }
      )
      // eslint-disable-next-line no-console
      alert(res.data.message)
      setEmail("")
      setMessage("")
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      alert("Une erreur s'est produite lors de l'envoi du message.")
    }
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
        value={username}
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
