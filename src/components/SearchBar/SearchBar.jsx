import React, { useState, useContext } from "react";
import "./searchBar.css";
import { DataContext } from "../../../context/data.context";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { places } = useContext(DataContext);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.toString().trim().length === 0) {
      onSearch(places);
    } else {
      try {
        const results = places.filter((place) =>
          place.properties.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        onSearch(results);
      } catch (error) {
        console.error(error);
        onSearch([]);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="input-search"
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button className="btn-search" type="submit">
          Rechercher
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
