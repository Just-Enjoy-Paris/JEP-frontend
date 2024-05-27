import { useContext } from "react"
import "./placeList.css"
import PlaceCard from "../PlaceCard/PlaceCard"
import { DataContext } from "../../../context/data.context"

export default function PlaceList() {
  const { searchResult, places, selectedCategories } = useContext(DataContext)

  const filteredPlaces =
    searchResult !== null
      ? searchResult.filter(
          place =>
            selectedCategories.length === 0 ||
            selectedCategories.includes(place.properties.category[0])
        )
      : places.filter(
          place =>
            selectedCategories.length === 0 ||
            selectedCategories.includes(place.properties.category[0])
        )

  return (
    <>
      {filteredPlaces.map((place, index) => (
        <PlaceCard
          key={place._id}
          place={place}
          isLast={index === filteredPlaces.length - 1}
        />
      ))}
    </>
  )
}
