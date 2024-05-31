/* eslint-disable no-console */
import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [places, setPlaces] = useState([])
  const [gardenPlaces, setGardenPlaces] = useState([])
  const [touristPlaces, setTouristPlaces] = useState([])
  const [search, setSearch] = useState(null)
  const [searchResult, setSearchResult] = useState(null)
  const [showLoader, setShowLoader] = useState(true);

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

  return (
    <DataContext.Provider
      value={{
        setPlaces,
        places,
        gardenPlaces,
        touristPlaces,
        search,
        setSearch,
        searchResult,
        setSearchResult,
        showLoader,
        setShowLoader
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
