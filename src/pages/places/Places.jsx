import "./places.css"
import PlaceList from "../../components/PlaceList/PlaceList"
import SearchBar from "../../components/SearchBar/SearchBar"
import { useState } from "react"

export default function Places() {
  const [searchResult, setSearchResult] = useState(null)

  const categoryMap = {
    Restaurant: [
      "Restaurant",
      "Fast food",
      "Streetfood Chinoise",
      "Restaurant Algerien",
      "Restaurant Italien"
    ],
    Shopping: [
      "Boutique",
      "Bijouterie",
      "Association",
      "Boutique de vêtements", 
      "Boutique de porcelaine"
    ],
    Gourmandise: [
      "Pâtisserie",
      "Bubble tea",
      "Salon de thé",
      "Marchand de glaces"
    ],
    Courses: ["Boulangerie", "Primeur", "Marché"],
    Hôtel: ["Hotel"],
    Culture: ["Boutique d'objets religieux", "Librairie"],
    Pratique: ["Coiffeur", "Boutique de CBD", "Vente et réparation de cycles"]
  }

  const categorySections = [
    { categories: ["Restaurant"] },
    { categories: ["Gourmandise"] },
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
        {categorySections.map(({ title, categories }) => (
          <div className="category-section" key={title}>
            {categories.map(category => (
              <PlaceList
                key={category}
                searchResult={searchResult}
                categoryMap={{ [category]: categoryMap[category] }}
              />
            ))}
          </div>
        ))}
      </section>
    </main>
  )
}
