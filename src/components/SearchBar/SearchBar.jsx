<<<<<<< HEAD
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
=======
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
>>>>>>> b1dfb41d5197925f4dfad1d3938df78b77a5fe9c
