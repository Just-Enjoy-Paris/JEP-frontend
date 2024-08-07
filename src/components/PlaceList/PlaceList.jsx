import React, { useContext, useEffect } from "react"
import PlaceCard from "../PlaceCard/PlaceCard"
import { DataContext } from "../../../context/data.context"
import AdCard from "../AdCard/AdCard"
import AdCategories from "../AdCategories/AdCategories"
import "./placeList.css"

export default function PlaceList({ searchResult, categoryMap }) {
  const { places, selectedCategories, setSelectedCategories } =
    useContext(DataContext)

  // Reset selected categories when the component is unmounted
  useEffect(() => {
    return () => {
      setSelectedCategories([])
    }
  }, [setSelectedCategories])

  // Filter places based on selected categories
  const filterPlaces = places => {
    return places.filter(
      place =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(place.properties.category[0])
    )
  }

  // Get filtered places based on search results or all places
  const filteredPlaces =
    searchResult === null ? filterPlaces(places) : filterPlaces(searchResult)

  // Map subcategories to main categories
  const mapToMainCategory = subCategory => {
    for (const [mainCategory, subCategories] of Object.entries(categoryMap)) {
      if (subCategories.includes(subCategory)) {
        return mainCategory
      }
    }
    return null
  }

  // Group places by main category
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

  // Get main categories that have places
  const mainCategoriesWithPlaces = Object.keys(categoryMap).filter(
    mainCategory => groupedPlaces[mainCategory]?.length > 0
  )

  return (
    <>
      {mainCategoriesWithPlaces.map((mainCategory) => (
        <section className="category-section" key={mainCategory}>
          <h2>{mainCategory}</h2>
          <div className="main-category-section">
            {groupedPlaces[mainCategory].map((place, index) => (
              <React.Fragment key={place._id}>
                <PlaceCard place={place} />
                {(index + 1) % 4 === 0 && <AdCard />}
              </React.Fragment>
            ))}
          </div>
          <AdCategories />
        </section>
      ))}
    </>
  );
  
}
