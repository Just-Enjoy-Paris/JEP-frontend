import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar.jsx"
import FilterDropdown from "../FilterDropdown/FilterDropdown.jsx"

import "./searchBanner.css"

const SearchBanner = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handleSearchButtonClick = () => {
    if (!showSearchInput) {
      setShowSearchInput(true);
    }
  };

  return (
    <div className="search-container">
      <div className="search-banner">
        <SearchBar
          showSearchInput={showSearchInput}
          setShowSearchInput={setShowSearchInput}
          onSearchButtonClick={handleSearchButtonClick}
        />
        <FilterDropdown
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
      </div>
    </div>
  );
};

export default SearchBanner;
