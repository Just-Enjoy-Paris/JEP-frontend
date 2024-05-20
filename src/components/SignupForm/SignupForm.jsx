import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignUpForm = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      // eslint-disable-next-line no-console
      console.log("Les mots de passe ne correspondent pas")
      return
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/signup`,
        { email, password, username },
        { withCredentials: true }
      )
      // eslint-disable-next-line no-console
      console.log(response)
      if (response.status === 201) {
        navigate("/log")
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-title">Créer un compte</h1>
      <p>
        déjà inscrit?
        <a href="/log" onClick={onSwitchToLogin}>
          se connecter
        </a>
      </p>
      <div className="login-field">
        <label htmlFor="pseudo" className="login-label">
          Pseudo
        </label>
        <input
          type="username"
          id="username"
          className="login-input"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="login-field">
        <label htmlFor="email" className="login-label">
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          className="login-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="login-field">
        <label htmlFor="password" className="login-label">
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          className="login-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="login-field">
        <label htmlFor="confirmPassword" className="login-label">
          Confirmez le mot de passe
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="login-input"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button className="login-button" type="submit">
        S&apos;inscrire
      </button>
    </form>
  )
}

export default SignUpForm
