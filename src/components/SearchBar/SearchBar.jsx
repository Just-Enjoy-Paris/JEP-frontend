import React, { useState, useContext } from "react";
import { DataContext } from "../../../context/data.context";
import "./searchBar.css"

const SearchBar = () => {
  const { places } = useContext(DataContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const results = places.features.filter((place) =>
      place.properties.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
        className="input-search"
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button className="btn-search" type="submit">Rechercher</button>
      </form>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.properties.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
