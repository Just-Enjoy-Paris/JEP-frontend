import { useContext, useEffect } from "react";
import PlaceCard from "../PlaceCard/PlaceCard";
import { DataContext } from "../../../context/data.context";
import "./placeList.css"; // Ensure the CSS file is imported

export default function PlaceList({ searchResult, categoryMap }) {
  const { places, selectedCategories, setSelectedCategories } = useContext(DataContext);

  useEffect(() => {
    return () => {
      setSelectedCategories([]);
    };
  }, [setSelectedCategories]);

  const filterPlaces = (places) => {
    return places.filter(
      (place) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(place.properties.category[0])
    );
  };

  const filteredPlaces =
    searchResult === null ? filterPlaces(places) : filterPlaces(searchResult);

  const mapToMainCategory = (subCategory) => {
    for (const [mainCategory, subCategories] of Object.entries(categoryMap)) {
      if (subCategories.includes(subCategory)) {
        return mainCategory;
      }
    }
    return null;
  };

  const groupedPlaces = filteredPlaces.reduce((acc, place) => {
    const mainCategory = mapToMainCategory(place.properties.category[0]);
    if (mainCategory) {
      if (!acc[mainCategory]) {
        acc[mainCategory] = [];
      }
      acc[mainCategory].push(place);
    }
    return acc;
  }, {});

  return (
    <>
      {Object.keys(categoryMap).map((mainCategory) => (
        <section className="category-section" key={mainCategory}>
          <h2>{mainCategory}</h2>
          <div className="main-category-section">
            {groupedPlaces[mainCategory] ? (
              groupedPlaces[mainCategory].map((place, index) => (
                <PlaceCard
                  key={place._id}
                  place={place}
                  isLast={index === groupedPlaces[mainCategory].length - 1}
                />
              ))
            ) : (
              <p>Aucun {mainCategory.toLowerCase()} trouvé.</p>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
