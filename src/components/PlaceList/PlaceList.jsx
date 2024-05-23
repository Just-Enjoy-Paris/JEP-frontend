import { useState, useContext } from "react";
import "./placeList.css";
import { DataContext } from "../../../context/data.context"
import PlaceCard from "../PlaceCard/PlaceCard";
import FilterDropdown from "../FilterDropdown/FilterDropdown";

export default function PlaceList() {
  const { places } = useContext(DataContext)
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

  const filteredPlaces = selectedCategories.length === 0 
    ? places 
    : places.filter((place) =>
        selectedCategories.some((cat) => place.properties.category.includes(cat))
      );

  return (
    <section className="placeList">
      <h1 className="placeListTitle">Lieux</h1>
      <FilterDropdown selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />
      {filteredPlaces.map((place, index) => (
        <PlaceCard
          key={place._id}
          place={place}
          isLast={index === filteredPlaces.length - 1}
        />
      ))}
    </section>
  );
}
