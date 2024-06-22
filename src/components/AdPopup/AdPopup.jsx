import React, { useState } from "react"
import "./adPopup.css"

export default function AdPopup({ onClose }) {
  const [showPopup, setShowPopup] = useState(true)

  // Function to handle closing the popup
  const handleClose = () => {
    setShowPopup(false)
    onClose() // Call the onClose function passed as a prop to close the popup
  }

  return (
    <div className={`ad-popup ${showPopup ? "slide-in" : "slide-out"}`}>
      <div className="ad-content">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJhZG5hdmM1eXVwZWluam9pdGw0ZnZhY3NkNTJuYm00MDB2dDNvYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fSvqyvXn1M3btN8sDh/giphy.gif"
          alt=""
        />
      </div>
    </div>
  )
}
