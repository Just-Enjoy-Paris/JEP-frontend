/* eslint-disable no-console */
import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [places, setPlaces] = useState([])
  const [gardenPlaces, setGardenPlaces] = useState([])
  const [touristPlaces, setTouristPlaces] = useState([])
  const [searchResult, setSearchResult] = useState(null)
  const [showLoader, setShowLoader] = useState(true)
  const [search, setSearch] = useState("")
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

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
        console.log("Error loading, no places found")
      }
    }
    fetchPlaces()
  }, [])

  // Extract unique categories from places and set them in state
  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(places.map(place => place.properties.category[0]))
    )
    setCategories(uniqueCategories)
  }, [places])

  // Uncomment the below effect for debugging purposes
  // useEffect(() => {
  //   if (places) {
  //     console.log("Places updated:", places)
  //   }
  //   if (gardenPlaces) {
  //     console.log("Garden updated:", gardenPlaces)
  //   }
  //   if (touristPlaces) {
  //     console.log("Tourist updated:", touristPlaces)
  //   }
  //   if (categories) {
  //     console.log(categories)
  //   }
  // }, [places, gardenPlaces, touristPlaces])

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
        setShowLoader,
        categories,
        setCategories,
        selectedCategories,
        setSelectedCategories
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
