import "./places.css"
import PlaceList from "../../components/PlaceList/PlaceList"
import SearchBar from "../../components/SearchBar/SearchBar"
import AdCategories from "../../components/AdCategories/AdCategories"
import { useState } from "react"

export default function Places() {
  const [searchResult, setSearchResult] = useState(null)

  const categoryMap = {
    Restaurant: [
      "Restaurant",
      "Fast food",
      "Streetfood Chinoise",
      "Restaurant Algerien",
      "Restaurant Italien",
      "Brasserie"
    ],
    Soif: ["Bar", "Pub", "Café"],
    Shopping: [
      "Boutique",
      "Bijouterie",
      "Association",
      "Boutique de vêtements",
      "Boutique de porcelaine",
      "Parfumerie"
    ],
    Gourmandise: [
      "Pâtisserie",
      "Bubble tea",
      "Salon de the",
      "Marchand de glaces",
    ],
    Courses: ["Boulangerie", "Primeur", "Marché"],
    Hôtel: ["Hotel"],
    Culture: ["Boutique d'objets religieux", "Librairie", "Galerie d'art"],
    Pratique: [
      "Coiffeur",
      "Boutique de CBD",
      "Vente et réparation de cycles",
      "Service d'impression 3D"
    ]
  }

  const categorySections = [
    { categories: ["Restaurant"] },
    { categories: ["Gourmandise"] },
    { categories: ["Soif"] },
    { categories: ["Shopping"] },
    { categories: ["Pratique"] },
    { categories: ["Courses"] },
    { categories: ["Hôtel"] },
    { categories: ["Culture"] }
  ]

  return (
    <main className="placesPage">
      <h1 className="placeListTitle">Lieux</h1>
      <SearchBar setSearchResult={setSearchResult} />
      <section className="placeListContainer">
        {categorySections.map(({ categories }, index) => (
          <div className="category-section" key={index}>
            {categories.map((category, index2) => (
              <PlaceList
                key={index2}
                searchResult={searchResult}
                categoryMap={{ [category]: categoryMap[category] }}
              />
            ))}
            {index % 2 === 0 && <AdCategories />}
          </div>
        ))}
      </section>
    </main>
  )
}
