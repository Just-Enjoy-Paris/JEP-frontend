import React, { useState } from "react";
import "./placeList.css";
import places from "../../data/places.geo.json";
import PlaceCard from "../PlaceCard/PlaceCard";
import FilterDropdown from "../FilterDropdown/FilterDropdown";

export default function PlaceList() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((cat) => cat !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  // Filtrer les lieux en fonction des catégories sélectionnées
  const filteredPlaces = selectedCategories.length === 0 ? places : places.filter((place) =>
    selectedCategories.includes(place.properties.category[0])
  );

  return (
    <section className="placeList">
      <h1 className="placeListTitle">Lieux</h1>
      {/* Inclure le composant Filter et passer les catégories sélectionnées et la fonction de mise à jour */}
      <FilterDropdown selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />
      {filteredPlaces.map((place, index) => (
        <PlaceCard
          place={place.properties}
          key={place._id}
          isLast={index === filteredPlaces.length - 1}
        />
      ))}
    </section>
  );
}
