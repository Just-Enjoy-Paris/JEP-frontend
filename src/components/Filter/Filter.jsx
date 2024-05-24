import React from "react";

export default function Filter({ selectedCategories, onCategoryChange }) {
  const categories = 
  [
    "Pâtisserie",
    "Restaurant",
    "Bijouterie",
    "Bar",
    "Pub",
    "Eglise",
    "Cimetière",
    "Galerie d'art",
    "Hotel",
    "Service d'impression 3D",
    "Parfumerie",
    "Librairie",
    "Boulangerie",
    "Café",
    "Boutique de Porcelaine",
    "Primeur",
    "Boutique de vêtements",
    "Boutique d'objets religieux", 
    "Salon de the",
    "Fast food",
    "Bubble tea",
    "Salon de coiffure",
    "Marchand de glaces",
    "Vente et réparation de cycles",
    "Boutique de CBD",
    "Association"
   ];

  return (
    <div className="filter">
      {categories.map((category) => (
        <div key={category}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => onCategoryChange(category)}
          />
          <label>{category}</label>
        </div>
      ))}
    </div>
  );
}
