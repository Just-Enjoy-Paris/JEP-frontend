/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from "react"
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa"
import "./opinion.css"
import { AuthContext } from "../../../context/user.context"
import toast from "react-hot-toast"
import axios from "axios"

export default function Opinion({ place }) {
  const { isAuthenticated, user } = useContext(AuthContext)
  const [clickedUp, setClickedUp] = useState(false)
  const [clickedDown, setClickedDown] = useState(false)
  const [isPositive, setIsPositive] = useState(null)

  const handleUnauthorized = () => {
    toast(<p className="p-toast">Connectez-vous pour évaluer un lieu</p>)
  }
  useEffect(() => {
    if (place && user) {
      if (place.properties.positiveReviewedBy.includes(user._id)) {
        setClickedUp(true)
      } else if (place.properties.negativeReviewedBy.includes(user._id)) {
        setClickedDown(true)
      }
    }
  }, [place, user])

  useEffect(() => {
    const sendReview = async () => {
      if (isPositive !== null) {
        try {
          const res = await axios.put(
            `${import.meta.env.VITE_API_URL}/update-review`,
            { placeId: place._id, isPositive },
            { withCredentials: true }
          )

          toast.success("Merci pour votre avis")
          console.log(res.data)
        } catch (error) {
          toast.error(error.response?.data?.message)
          console.error(
            error.response?.data?.message || "An unknown error occurred"
          )
        }
      }
    }

    sendReview()
  }, [place, isPositive])

  const handleThumbsClickUp = async () => {
    if (!isAuthenticated) {
      return handleUnauthorized()
    }
    if (clickedUp === false) {
      setClickedUp(true)
      setClickedDown(false)
      setIsPositive(true)
    }
  }
  const handleThumbsClickDown = async () => {
    if (!isAuthenticated) {
      return handleUnauthorized()
    }
    if (clickedDown === false) {
      setClickedUp(false)
      setClickedDown(true)
      setIsPositive(false)
    }
  }

  return (
    <section className="opinion">
      <p>Avez-vous aimé cette suggestion ?</p>
      <FaRegThumbsUp
        size={20}
        onClick={handleThumbsClickUp}
        className={clickedUp ? "icon-clicked up" : "icon1"}
        style={{ cursor: clickedUp === null ? "pointer" : "default" }}
      />
      <FaRegThumbsDown
        size={20}
        onClick={handleThumbsClickDown}
        className={clickedDown ? "icon-clicked down" : "icon2"}
        style={{ cursor: clickedDown === null ? "pointer" : "default" }}
      />
    </section>
  )
}
