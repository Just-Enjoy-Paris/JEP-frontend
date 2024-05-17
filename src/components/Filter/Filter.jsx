import React, { useState } from "react";
import "./Filter.css";
import { VscSettings } from "react-icons/vsc";
import closeFilter from "../../img/close.svg"
import categoriesData from "../../data/places.geo.json"; // Ajustez le chemin si nécessaire

const Filter = ({ filter, setFilter }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  // Extraire toutes les catégories uniques
  const categories = ["tout afficher", ...new Set(categoriesData.flatMap(place => place.properties.category))];

  // État local pour les catégories sélectionnées
  const [selectedCategories, setSelectedCategories] = useState(["tout afficher"]);

  // Fonction pour gérer le changement de checkbox
  const handleCheckboxChange = (category) => {
    if (category === "tout afficher") {
      setSelectedCategories(["tout afficher"]);
    } else {
      setSelectedCategories((prevSelected) => {
        if (prevSelected.includes(category)) {
          // Supprime la catégorie si elle est déjà sélectionnée
          const newSelected = prevSelected.filter((cat) => cat !== category);
          return newSelected.length === 0 ? ["tout afficher"] : newSelected;
        } else {
          // Ajoute la catégorie si elle n'est pas déjà sélectionnée
          return prevSelected.filter((cat) => cat !== "tout afficher").concat(category);
        }
      });
    }
    setFilter(category);
  };

  return (
    <div className="filterContainer">
      <div>
        <button className="categoriesIcon" onClick={() => setIsFilterOpen(!isFilterOpen)}>
          Filtre: <u>{filter}</u> {/* Affiche le filtre actuel */}
          {isFilterOpen ? (
          <img className="closeFilter" src={closeFilter} alt="Close" />
        ) : (
          <VscSettings className="openFilter" size={26} />
        )}
        </button>
        <div className={`filterLinks ${isFilterOpen ? "open" : "closed"}`}>
        {/* Génère les checkboxes de filtre à partir des catégories extraites */}        
        {categories.map((category) => (
          <div key={category} onClick={() => setIsFilterOpen(false)}>
            <input
              type="checkbox"
              id={`checkbox-${category}`}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
            />
            <label htmlFor={`checkbox-${category}`}>{category}</label>
          </div>          
        ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
