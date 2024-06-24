import React from "react"

import "./cookiePolicy.css"

const CookiePolicy = () => {
  return (
    <div className="cookie-policy">
      <h1>Politique d utilisation des cookies</h1>
      <p>
        Notre site utilise des cookies pour améliorer votre expérience
        utilisateur. En continuant à naviguer sur notre site, vous acceptez
        notre utilisation des cookies.
      </p>
      <h2>Qu est-ce qu un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte qui est stocké sur votre ordinateur
        ou votre appareil mobile lorsque vous visitez un site web. Les cookies
        permettent au site web de se souvenir de vos actions et préférences
        (comme votre nom d utilisateur, votre langue, la taille de la police et
        d autres préférences d affichage) pendant une certaine période de temps,
        afin que vous n ayez pas à les saisir à chaque fois que vous revenez sur
        le site ou que vous naviguez d une page à l autre.
      </p>
      {/* Ajoutez le reste du contenu de la politique d'utilisation des cookies ici */}
    </div>
  )
}

export default CookiePolicy
