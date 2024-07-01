import React from "react"

import "./cookiePolicy.css"

const CookiePolicy = () => {
  return (
    <div className="cookie-policy">
      <h1>Politique d&apos;utilisation des cookies</h1>
      <p>
        Notre site utilise des cookies pour améliorer votre expérience
        utilisateur. En continuant à naviguer sur notre site, vous acceptez
        notre utilisation des cookies.
      </p>
      <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte qui est stocké sur votre ordinateur
        ou votre appareil mobile lorsque vous visitez un site web. Les cookies
        permettent au site web de se souvenir de vos actions et préférences
        (comme votre nom d&apos;utilisateur, votre langue, la taille de la
        police et d&apos;autres préférences d&apos;affichage) pendant une
        certaine période de temps, afin que vous n&apos;ayez pas à les saisir à
        chaque fois que vous revenez sur le site ou que vous naviguez d&apos;une
        page à l&apos;autre.
      </p>
      <h2>Comment utilisons-nous les cookies ?</h2>
      <p>Nous utilisons des cookies pour :</p>
      <ul>
        <li>
          Gérer votre session utilisateur et vous permettre de rester connecté
          lorsque vous naviguez sur notre site.
        </li>
        <li>
          Mémoriser vos préférences d&apos;affichage et vos paramètres
          utilisateur.
        </li>
        <li>
          Analyser l&apos;utilisation de notre site web afin d&apos;améliorer
          ses fonctionnalités et ses performances.
        </li>
        <li>
          Suivre l&apos;efficacité de nos campagnes publicitaires et de nos
          réseaux sociaux.
        </li>
        <li>
          Personnaliser le contenu et les publicités en fonction de vos centres
          d&apos;intérêt.
        </li>
      </ul>
      <h2>Comment contrôler les cookies ?</h2>
      <p>
        Vous pouvez contrôler et/ou supprimer des cookies comme vous le
        souhaitez. Pour en savoir plus, consultez la page&nbsp;
        <a className="aboutCookies"
          href="https://www.aboutcookies.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          aboutcookies.org
        </a>
        . Vous pouvez supprimer tous les cookies déjà présents sur votre
        ordinateur et configurer la plupart des navigateurs pour empêcher leur
        installation. Toutefois, si vous le faites, vous devrez peut-être
        ajuster manuellement certaines préférences chaque fois que vous visitez
        notre site, et certains services et fonctionnalités risquent de ne pas
        fonctionner correctement.
      </p>
      <h2>Mise à jour de notre politique de consentement des cookies</h2>
      <p>
        Nous pouvons mettre à jour notre politique de consentement des cookies
        de temps à autre. Nous vous informerons de tout changement important en
        publiant une notification sur notre site web. Nous vous encourageons à
        revoir périodiquement cette politique pour rester informé de la manière
        dont nous utilisons les cookies.
      </p>
    </div>
  )
}

export default CookiePolicy
