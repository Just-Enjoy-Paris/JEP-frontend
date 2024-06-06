import axios from "axios"
import "./rating.css"
import React, { useContext, useState } from "react"
import { DataContext } from "../../../context/data.context"

export default function Rating({ placeId }) {
  const [newRate, setNewRate] = useState("")
  const { setPlaces } = useContext(DataContext)

  const placeRating = async e => {
    e.preventDefault()
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/rating-place`,
        { placeId, newRate },
        { withCredentials: true }
      )
      setPlaces(response.data.places)
    } catch (error) {
      console.log("Error updating rating:", error)
    }
  }

  return (
    <form className="rating" onSubmit={placeRating}>
      <button type="submit">Valider la note</button>
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
            title={`Rate as ${number} stars`}
            htmlFor={`star${number}`}
          ></label>
        </React.Fragment>
      ))}
    </form>
  )
}
