import React, { useState } from "react";
import "./Filter.css";
import { VscSettings } from "react-icons/vsc";
import categoriesData from "../../data/places.geo.json"; // Ajustez le chemin si nécessaire

const Filter = ({ filter, setFilter }) => {
  // Extraire toutes les catégories uniques
  const categories = ["all", ...new Set(categoriesData.flatMap(place => place.properties.category))];

  // État local pour les catégories sélectionnées
  const [selectedCategories, setSelectedCategories] = useState(["all"]);

  // Fonction pour gérer le changement de checkbox
  const handleCheckboxChange = (category) => {
    if (category === "all") {
      setSelectedCategories(["all"]);
    } else {
      setSelectedCategories((prevSelected) => {
        if (prevSelected.includes(category)) {
          // Supprime la catégorie si elle est déjà sélectionnée
          const newSelected = prevSelected.filter((cat) => cat !== category);
          return newSelected.length === 0 ? ["all"] : newSelected;
        } else {
          // Ajoute la catégorie si elle n'est pas déjà sélectionnée
          return prevSelected.filter((cat) => cat !== "all").concat(category);
        }
      });
    }
    setFilter(category);
  };

  return (
    <div className="filterContainer">
      <div>
        <div className="categoriesIcon">
          <VscSettings style={{ marginRight: "10px" }} />
          Current filter: <u>{filter}</u> {/* Affiche le filtre actuel */}
        </div>
        <div className="placesCategories">
        {/* Génère les checkboxes de filtre à partir des catégories extraites */}        
        {categories.map((category) => (
          <div key={category}>
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
