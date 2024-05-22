import React, { useState, useContext } from "react";
import axios from "axios";
import "./searchBar.css"
import { DataContext } from "../../../context/data.context"

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { places } = useContext(DataContext)

  const handleSearch = async (event) => {
    event.preventDefault();
    if(searchQuery.trim().length === 0){
        setSearchQuery(places)
    }
    const response = await axios.get(`/api/search?query=${searchQuery}`);
    onSearch(response.data);
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
        <button className="btn-search" type="submit">Rechercher</button>
      </form>
    </div>
  );
};

export default SearchBar;
