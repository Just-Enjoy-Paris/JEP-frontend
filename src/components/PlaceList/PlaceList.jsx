import React, { useContext, useEffect } from "react"
import PlaceCard from "../PlaceCard/PlaceCard"
import { DataContext } from "../../../context/data.context"
import AdCategories from "../AdCategories/AdCategories"
import "./placeList.css"

export default function PlaceList({ searchResult, categoryMap }) {
  const { places, selectedCategories, setSelectedCategories } =
    useContext(DataContext)

  useEffect(() => {
    return () => {
      setSelectedCategories([])
    }
  }, [setSelectedCategories])

  const filterPlaces = places => {
    return places.filter(
      place =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(place.properties.category[0])
    )
  }

  const filteredPlaces =
    searchResult === null ? filterPlaces(places) : filterPlaces(searchResult)

  const mapToMainCategory = subCategory => {
    for (const [mainCategory, subCategories] of Object.entries(categoryMap)) {
      if (subCategories.includes(subCategory)) {
        return mainCategory
      }
    }
    return null
  }

  const groupedPlaces = filteredPlaces.reduce((acc, place) => {
    const mainCategory = mapToMainCategory(place.properties.category[0])
    if (mainCategory) {
      if (!acc[mainCategory]) {
        acc[mainCategory] = []
      }
      acc[mainCategory].push(place)
    }
    return acc
  }, {})

  const mainCategoriesWithPlaces = Object.keys(categoryMap).filter(
    mainCategory => groupedPlaces[mainCategory]?.length > 0
  )

  return (
    <>
      {mainCategoriesWithPlaces.map((mainCategory, index) => (
        <React.Fragment key={mainCategory}>
          <section className="category-section">
            <h2>{mainCategory}</h2>
            <div className="main-category-section">
              {groupedPlaces[mainCategory].map(place => (
                <PlaceCard key={place._id} place={place} />
              ))}
            </div>
          </section>
          {index % 2 === 0 && <AdCategories />}
        </React.Fragment>
      ))}
    </>
  )
}
