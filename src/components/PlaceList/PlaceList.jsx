import React, { useState, useEffect } from "react"
import "./placeList.css"
import places from "../../data/places.geo.json"
import PlaceCard from "../PlaceCard/PlaceCard"
import FilterDropdown from "../FilterDropdown/FilterDropdown"
import SearchBar from "../SearchBar/SearchBar"

export default function PlaceList() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])

  useEffect(() => {
    setFilteredPlaces(places)
  }, [])

  const handleCategoryChange = category => {
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter(cat => cat !== category)
      } else {
        return [...prevCategories, category]
      }
    })
  }

  // Filtrer les lieux en fonction des catégories sélectionnées
  const filteredPlacesByCategories =
    selectedCategories.length === 0
      ? filteredPlaces
      : filteredPlaces.filter(place =>
          selectedCategories.includes(place.properties.category[0])
        )

  // Transmettre la fonction setFilteredPlaces en tant que props au composant SearchBar
  const handleSearch = searchResults => {
    setFilteredPlaces(searchResults)
  }

  return (
    <section className="placeList">
      <h1 className="placeListTitle">Lieux</h1>
      {/* Inclure le composant Filter et passer les catégories sélectionnées et la fonction de mise à jour */}
      <SearchBar onSearch={handleSearch} />
      <FilterDropdown
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />
      {Array.isArray(filteredPlacesByCategories) &&
        filteredPlacesByCategories.map((place, index) => (
          <PlaceCard
            place={place.properties}
            key={place._id}
            isLast={index === filteredPlacesByCategories.length - 1}
          />
        ))}
    </section>
  )
}
