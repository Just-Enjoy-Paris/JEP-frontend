import "./filter.css"
import React, { useContext } from "react"
import { DataContext } from "../../../context/data.context"

export default function Filter() {
  const { selectedCategories, setSelectedCategories } = useContext(DataContext)
  const categories = [
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
  ]

  const handleCategoryChange = category => {
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter(cat => cat !== category)
      } else {
        return [...prevCategories, category]
      }
    })
  }

  return (
    <div className="filter">
      {categories.map(category => (
        <div key={category}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          <label>{category}</label>
        </div>
      ))}
    </div>
  )
}
