import { useContext, useEffect } from "react"
import "./map.css"
import { DataContext } from "../../../context/data.context"
import AdComponent from "../AdComponent/AdComponent"
import Marker from "../../img/marker.png"

// Importez la bibliothèque MarkerClusterer
import { MarkerClusterer } from "@googlemaps/markerclusterer"

export default function Map() {
  const { places } = useContext(DataContext)

  useEffect(() => {
    // Initialize the Google Map
    const initMap = () => {
      const googleMaps = window.google.maps

      // Create a new map centered on Paris
      const map = new googleMaps.Map(document.getElementById("map"), {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 12,
        mapId: "fe2668b01b9cb7be"
      })

      // Add markers for each place
      const markers = places.map(point => {
        const image = {
          url: Marker,
          scaledSize: new googleMaps.Size(32, 32)
        }

        const marker = new googleMaps.Marker({
          position: {
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0]
          },
          title: point.properties.name,
          icon: image
        })

        // Create an info window for each marker
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

        // Add a click listener to open the info window when the marker is clicked
        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })
        return marker
      })
      // Utilisez MarkerClusterer pour regrouper les marqueurs
      new MarkerClusterer({ markers, map })
    }

    // Load the Google Maps script
    const loadGoogleMaps = async () => {
      // Check if the script is already loaded
      if (!document.getElementById("google-maps-script")) {
        const script = document.createElement("script")
        script.id = "google-maps-script"
        script.src = `${import.meta.env.VITE_API_URL_AND_KEYMAP}`
        script.async = true
        script.defer = true
        document.body.appendChild(script)
        script.onload = initMap
      } else {
        // If the script is already loaded, initialize the map directly
        if (window.google && window.google.maps) {
          initMap()
        }
      }
    }
    loadGoogleMaps()
  }, [places])

  return (
    <section>
      {/* Map container */}
      <div id="map" className="mapContainer"></div>
      {/* Ad component */}
      <AdComponent />
    </section>
  )
}
