import { useEffect, useState } from "react"
import "./Map.css"
import Directions from "./Directions.jsx"

import jsonData from "../../data/places.geo.json"

export default function Map() {
  const [map, setMap] = useState(null)
  const [showItinerary, setShowItinerary] = useState(false)

  useEffect(() => {
    async function initMap() {
      const googleMaps = await window.google.maps
      const map = new googleMaps.Map(document.getElementById("map"), {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 13
      })
      setMap(map)
      console.log(map)

      jsonData.forEach(point => {
        const marker = new googleMaps.Marker({
          position: {
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0]
          },
          map: map,
          title: point.properties.name
        })

        // Créer une info window pour chaque marqueur
        const infoWindow = new googleMaps.InfoWindow({
          content: `
            <div>
              <h3>${point.properties.name}</h3>
              <p>${point.properties.address}</p>
              <p>${
                Array.isArray(point.properties.category)
                  ? point.properties.category.join(", ")
                  : ""
              }</p>
            </div>
          `
        })

        // gestionnaire d'événement pour afficher l'info window lorsque le marqueur est cliqué/touché
        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })
      })

      googleMaps.event.addListener(map, "load", function() {
        console.log('Map is loaded');
      });
    }

    async function loadGoogleMaps() {
      const script = document.createElement("script")
      script.src = import.meta.env.VITE_API_URL_AND_KEYMAP
      script.async = true
      script.onload = () => {
        initMap()
      }
      document.body.appendChild(script)
    }

    loadGoogleMaps()

    return () => {
      const script = document.querySelector(
        "script[src='" + import.meta.env.VITE_API_URL_AND_KEYMAP + "']"
      )
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section>
      <div id="map" className="mapContainer"></div>
      <button onClick={() => { setShowItinerary(!showItinerary); }}>
        {showItinerary ? "Masquer l'itinéraire" : "Afficher l'itinéraire"}
      </button>
      {map && <Directions map={map} showItinerary={showItinerary} />}
    </section>
  )
}
