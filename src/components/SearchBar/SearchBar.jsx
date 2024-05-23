import {  useContext } from "react";
import "./searchBar.css";
import { DataContext } from "../../../context/data.context";

export default function SearchBar() {
  const { places, search, setSearch, setSearchResult } = useContext(DataContext)
  
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    // const searchTerm = event.target.search.value;
    const regex = new RegExp(search, "i"); // 'i' pour la recherche insensible à la casse
    const filteredPlaces = places.filter((place) => regex.test(place.properties.name));
    setSearchResult(filteredPlaces);
  };
  
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Rechercher un lieu"
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>Rechercher</button>
    </div>
  );
}
