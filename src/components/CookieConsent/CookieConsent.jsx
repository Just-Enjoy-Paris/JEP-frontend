import { useState, useEffect } from "react"
import Cookies from "js-cookie"

import "./cookieConsent.css"

const CookieConsent = () => {
  const [hasConsented, setHasConsented] = useState(false)

  useEffect(() => {
    const cookieConsent = Cookies.get("cookie_consent")
    if (cookieConsent === "true") {
      setHasConsented(true)
    }
  }, [])

  const handleAccept = () => {
    setHasConsented(true)
    Cookies.set("cookie_consent", "true", { expires: 30 })
  }

  if (hasConsented) {
    return null
  }

  return (
    <div className="cookie-consent">
      <p>
        Ce site utilise des cookies pour améliorer votre expérience. En
        continuant à naviguer sur ce site, vous acceptez notre <a href="/">Politique d utilisation des cookies</a>.
      </p>
      <button onClick={handleAccept}>Accepter</button>
    </div>
  )
}

export default CookieConsent
