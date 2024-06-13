import axios from "axios"
import "./rating.css"
import React, { useContext, useState } from "react"
import { DataContext } from "../../../context/data.context"
import toast from "react-hot-toast"
import { AuthContext } from "../../../context/user.context"

export default function Rating({ placeId, rate }) {
  const [newRate, setNewRate] = useState(rate)
  const { setPlaces } = useContext(DataContext)
  const { isAuthenticated } = useContext(AuthContext)

  const placeRating = async e => {
    e.preventDefault()
    if (!isAuthenticated) {
      return toast(
        <p className="p-toast">Connectez vous pour évaluer un lieu</p>
      )
    }
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/rating-place`,
        { placeId, newRate },
        { withCredentials: true }
      )
      setPlaces(response.data.places)
    } catch (error) {
      toast.error("Error updating rating")
    }
  }

  return (
    <form className="rating" onSubmit={placeRating}>
      <button type="submit">Valider la note</button>
      <div className="total-stars">({rate})</div>
      {[5, 4, 3, 2, 1].map(number => (
        <React.Fragment key={number}>
          <input
            value={number}
            onChange={e => setNewRate(e.target.value)}
            checked={newRate === number.toString()}
            name="rate"
            id={`star${number}`}
            type="radio"
          />
          <label
            htmlFor={`star${number}`}
            className={
              newRate >= number ? "full" : newRate >= number - 0.5 ? "half" : ""
            }
            title={`Rate as ${number} stars`}
          ></label>
        </React.Fragment>
      ))}
    </form>
  )
}
