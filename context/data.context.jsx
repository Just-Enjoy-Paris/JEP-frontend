/* eslint-disable no-console */
import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [places, setPlaces] = useState([])
  const [gardenPlaces, setGardenPlaces] = useState([])
  const [touristPlaces, setTouristPlaces] = useState([])

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const resPlaces = await axios.get(
          `${import.meta.env.VITE_API_URL}/places`,
          { withCredentials: true }
        )
        setPlaces(resPlaces.data.places)
        setGardenPlaces(resPlaces.data.gardenPlaces)
        setTouristPlaces(resPlaces.data.touristPlaces)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("Error loading ,no places found")
      }
    }
    fetchPlaces()
  }, [])
  // à retirer
  useEffect(() => {
    if (places) {
      console.log("Places updated: error", places)
    }
    if (gardenPlaces) {
      console.log("Garden updated:", gardenPlaces)
    }
    if (touristPlaces) {
      console.log("Tourist updated:", touristPlaces)
    }
  }, [places, gardenPlaces, touristPlaces])

  return (
    <DataContext.Provider value={{ places, gardenPlaces, touristPlaces }}>
      {children}
    </DataContext.Provider>
  )
}
