import { useEffect, useRef, useState } from "react"
import "./Map.css"
import Directions from "./Directions"

import jsonData from "../../data/places.geo.json";

export default function Map() {
  const mapRef = useRef(null)
  const [showItinerary, setShowItinerary] = useState(false)

  useEffect(() => {
    async function initMap() {
      const googleMaps = await window.google.maps
      const map = new googleMaps.Map(mapRef.current, {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 13
      })

      jsonData.forEach(point => {
        const markerElement = document.createElement("div")
        markerElement.innerHTML = `
          <h3>${point.properties.name}</h3>
          <p>${point.properties.address}</p>
          <p>${
            Array.isArray(point.properties.category)
              ? point.properties.category.join(", ")
              : ""
          }</p>
        `

        const marker = new googleMaps.marker.AdvancedMarkerElement({
          map: map,
          position: {
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0]
          },
          content: markerElement
        })

        // Ajouter un gestionnaire d'événement pour afficher l'info window lorsque le marqueur est cliqué/touché
        marker.addListener("click", () => {
          // Vous pouvez ajouter ici le code pour afficher une info window ou tout autre effet que vous souhaitez lorsque le marqueur est cliqué
        })
      })
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
      <div id="map" className="mapContainer" ref={mapRef}></div>
      <button onClick={() => { setShowItinerary(true); }}>Afficher itinéraire</button>
      {showItinerary && (
        <div>
          <p>Itinéraire de test affiché</p>
          {/* Vous pouvez ajouter ici des informations supplémentaires sur l'itinéraire, si vous le souhaitez */}
        </div>
      )}
      <Directions map={mapRef.current} showItinerary={showItinerary} />
    </section>
  )
}
