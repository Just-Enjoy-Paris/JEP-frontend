import "./FilterDropdown.css"
import { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import Filter from "../Filter/Filter";

const FilterDropdown = ({ selectedCategories, onCategoryChange }) => {
    // État pour suivre si le menu est ouvert ou fermé
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <div className="filter-dropdown">
        {/* Bouton de bascule du menu */}
        <button
          className="dropdown-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <div className="filterMenu">
                <VscSettings className="openFilter" size={30} />
                <p>Filtrer</p>
            </div>
        </button>
  
        {/* Affichage conditionnel des filtres */}
        {isMenuOpen && (
          <div className={`filterLinks ${isMenuOpen ? "open" : "closed"}`}>
            <Filter 
              selectedCategories={selectedCategories}
              onCategoryChange={onCategoryChange}
            />
          </div>
        )}
      </div>
    );
  };
  
  export default FilterDropdown;