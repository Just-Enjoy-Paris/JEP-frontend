import { useContext, useEffect } from "react"
import PlaceCard from "../PlaceCard/PlaceCard"
import { DataContext } from "../../../context/data.context"

export default function PlaceList({ searchResult }) {
  const { places, selectedCategories, setSelectedCategories } =
    useContext(DataContext)

  useEffect(() => {
    return () => {
      setSelectedCategories([])
    }
  }, [])

  const filteredPlaces =
    searchResult === null
      ? places.filter(
          place =>
            selectedCategories.length === 0 ||
            selectedCategories.includes(place.properties.category[0])
        )
      : searchResult.filter(
          place =>
            selectedCategories.length === 0 ||
            selectedCategories.includes(place.properties.category[0])
        )

  return filteredPlaces.map((place, index) => (
    <PlaceCard
      key={place._id}
      place={place}
      isLast={index === filteredPlaces.length - 1}
    />
  ))
}
