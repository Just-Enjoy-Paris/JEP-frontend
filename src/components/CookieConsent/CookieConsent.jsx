import { useState, useEffect } from "react"
import Cookies from "js-cookie"

import "./cookieConsent.css"

// Customized function to verify cookie consent
const getCookieConsent = () => {
  const cookieConsent = Cookies.get("cookie_consent")
  return cookieConsent === "true"
}

// Function to store user geolocation in a cookie
const setGeolocationCookie = (latitude, longitude) => {
  Cookies.set("geolocation", JSON.stringify({ latitude, longitude }), {
    expires: 30 // 30 days
  })
}

// Function to store the user's advertising clicks in a cookie
const setAdClickCookie = adId => {
  const adClicks = Cookies.get("ad_clicks")
    ? JSON.parse(Cookies.get("ad_clicks"))
    : []
  adClicks.push(adId)
  Cookies.set("ad_clicks", JSON.stringify(adClicks), { expires: 30 })
}

// Function to retrieve the user's advertising clicks from a cookie
const getAdClickCookie = () => {
  const adClicks = Cookies.get("ad_clicks")
    ? JSON.parse(Cookies.get("ad_clicks"))
    : []
  return adClicks
}

const CookieConsent = () => {
  const [hasConsented, setHasConsented] = useState(false)

  useEffect(() => {
    setHasConsented(getCookieConsent())
  }, [])

  const handleAccept = () => {
    setHasConsented(true)
    Cookies.set("cookie_consent", "true", { expires: 30 })
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setGeolocationCookie(latitude, longitude)
      const adClicks = getAdClickCookie()
      if (adClicks.length > 0) {
        // Display ads similar to the user's previous clicks
      } else {
        // Display ads by default
      }
    })
  }

  const handleRefuse = () => {
    setHasConsented(false)
    Cookies.set("cookie_consent", "false", { expires: 1 })
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
export {
  getCookieConsent,
  setGeolocationCookie,
  setAdClickCookie,
  getAdClickCookie
}
