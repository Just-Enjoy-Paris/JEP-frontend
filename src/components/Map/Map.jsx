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
    const initMap = () => {
      const googleMaps = window.google.maps

      const map = new googleMaps.Map(document.getElementById("map"), {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 12,
        mapId: "fe2668b01b9cb7be"
      })

      const markers = places.map(point => {
        const image = {
          url: Marker,
          scaledSize: new googleMaps.Size(32, 32)
        };

        const marker = new googleMaps.Marker({
          position: {
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0]
          },
          title: point.properties.name,
          icon: image,
        });

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
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        });

        return marker;
      });

      // Utilisez MarkerClusterer pour regrouper les marqueurs
      new MarkerClusterer({ markers, map });
    }

    const loadGoogleMaps = async () => {
      // Vérifier si le script a déjà été chargé
      if (!document.getElementById("google-maps-script")) {
        const script = document.createElement("script")
        script.id = "google-maps-script"
        script.src = `${import.meta.env.VITE_API_URL_AND_KEYMAP}`
        script.async = true
        script.defer = true
        document.body.appendChild(script)
        script.onload = initMap
      } else {
        // Si le script est déjà chargé, initialiser la carte directement
        if (window.google && window.google.maps) {
          initMap()
        }
      }
    }
    loadGoogleMaps()
  }, [places])

  return (
    <section>
      <div id="map" className="mapContainer"></div>
      <AdComponent/>
    </section>
  )
}
