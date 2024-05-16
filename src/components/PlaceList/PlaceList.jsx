import React, { useState } from "react";
import "./placeList.css";
import places from "../../data/places.geo.json";
import PlaceCard from "../PlaceCard/PlaceCard";
import Filter from "../Filter/Filter";

export default function PlaceList() {
  const [filter, setFilter] = useState("all");

  // Filtrer les lieux en fonction du filtre sélectionné
  const filteredPlaces = filter === "all" ? places : places.filter(place =>
    place.properties.category.includes(filter)
  );

  return (
    <section className="placeList">
      <h1 className="placeListTitle">Lieux</h1>
      {/* Inclure le composant Filter et passer le filtre et setFilter comme props */}
      <Filter filter={filter} setFilter={setFilter} />
      {filteredPlaces.map((place, index) => (
        <PlaceCard
          place={place.properties}
          key={place._id}
          isLast={index === filteredPlaces.length - 1}
        />
      ))}
    </section>
  );
}
