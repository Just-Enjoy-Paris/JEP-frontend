import { useState } from "react"
import "./LogForm.css"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    // Traitement de la soumission du formulaire
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-title">Connexion</h1>
      <p>
        pas encore inscrit? <a>créer un compte</a>
      </p>
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
      <div className="logOption">
        <div>
          <input type="checkbox" />
          <label htmlFor="rememberMe">Se souvenir de moi</label>
        </div>
        <a href="#">mot de passe oublié?</a>
      </div>
      <button className="login-button" type="submit">
        Se connecter
      </button>
    </form>
  )
}

export default LoginForm
