import { useContext, useState } from "react"
import "./placeList.css";
import PlaceCard from "../PlaceCard/PlaceCard";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import SearchBar from "../SearchBar/SearchBar";
import { DataContext } from "../../../context/data.context";

export default function PlaceList() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { searchResult, places } = useContext(DataContext)

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

  // Filtrer les lieux en fonction des catégories sélectionnées et du terme de recherche
  // const filteredPlaces =
  // selectedCategories.length === 0 && !searchResult
  //   ? places
  //   : selectedCategories.length === 0 && searchResult
  //   ? searchResult
  //   : places.filter((place) =>
  //       selectedCategories.includes(place.properties.category[0]) &&
  //       new RegExp(searchResult, "i").test(place.properties.name)
  //     );

  return (
    <section className="placeList">
      <h1 className="placeListTitle">Lieux</h1>
      <SearchBar />
      {/* Inclure le composant Filter et passer les catégories sélectionnées et la fonction de mise à jour */}
      <FilterDropdown selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />
      {searchResult === null ? (
        filteredPlaces.map((place, index) => (
          <PlaceCard
            key={place._id}
            place={place.properties}
            isLast={index === filteredPlaces.length - 1}
          />
        ))
      ) : (
        searchResult.map((place, index) => (
          <PlaceCard
            key={place._id}
            place={place.properties}
            isLast={index === searchResult.length - 1}
          />
        ))
      )}
    </section>
  );
}
