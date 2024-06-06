import React, { useState } from "react"
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa"
import "./opinion.css"

export default function Opinion() {
  const [clicked, setClicked] = useState(null)

  const handleThumbsUpClick = () => {
    if (clicked === null) {
      setClicked("up")
    }
  }

  const handleThumbsDownClick = () => {
    if (clicked === null) {
      setClicked("down")
    }
  }

  return (
    <section className="opinion">
      <p>Avez-vous aimé cette suggestion ?</p>
      <FaRegThumbsUp
      size={20}
        onClick={handleThumbsUpClick}
        className={clicked === "up" ? "icon-clicked up" : "icon1"}
        style={{ cursor: clicked === null ? "pointer" : "default" }}
      />
      <FaRegThumbsDown
        size={20}
        onClick={handleThumbsDownClick}
        className={clicked === "down" ? "icon-clicked down" : "icon2"}
        style={{ cursor: clicked === null ? "pointer" : "default" }}
      />
    </section>
  )
}