import { useState, useEffect } from "react"
import Cookies from "js-cookie"

import "./cookieConsent.css"

// Fonction personnalisée pour vérifier le consentement aux cookies
const getCookieConsent = () => {
  const cookieConsent = Cookies.get("cookie_consent")
  return cookieConsent === "true"
}

const CookieConsent = () => {
  const [hasConsented, setHasConsented] = useState(false)

  useEffect(() => {
    setHasConsented(getCookieConsent())
  }, [])

  const handleAccept = () => {
    setHasConsented(true)
    Cookies.set("cookie_consent", "true", { expires: 30 }) // 30 days
  }

  const handleRefuse = () => {
    setHasConsented(false)
    Cookies.set("cookie_consent", "false", { expires: 1 }) // 1 day
  }

  if (hasConsented) {
    return null
  }

  return (
    <div className="cookie-consent">
      <p>
        Ce site utilise des cookies pour améliorer votre expérience. En
        continuant à naviguer sur ce site, vous acceptez notre{" "}
        <a href="/cookie-policy">Politique d&apos;utilisation des cookies</a>.
      </p>
      <button onClick={handleAccept}>Accepter</button>
      <button onClick={handleRefuse}>Refuser</button>
    </div>
  )
}

export default CookieConsent
export { getCookieConsent }
