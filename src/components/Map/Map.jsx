import { useEffect, useRef } from "react"
import "./Map.css"
import jsonData from "../../data/places.geo.json"

export default function Map() {
  const mapRef = useRef(null)
  const directionsRendererRef = useRef(null)

  useEffect(() => {
    async function initMap() {
      const googleMaps = await window.google.maps
      const map = new googleMaps.Map(mapRef.current, {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 13
      })

      // Créer un objet DirectionsRenderer pour afficher l'itinéraire
      directionsRendererRef.current = new googleMaps.DirectionsRenderer({
        map: map
      })

      // Récupérer les coordonnées des deux premiers lieux
      const origin = jsonData[0].geometry.coordinates
      const destination = jsonData[1].geometry.coordinates

      // Créer un objet DirectionsService pour envoyer la requête de calcul d'itinéraire
      const directionsService = new googleMaps.DirectionsService()

      // Envoyer la requête de calcul d'itinéraire
      directionsService.route(
        {
          origin: { lat: origin[1], lng: origin[0] },
          destination: { lat: destination[1], lng: destination[0] },
          travelMode: "WALKING" // Mode de transport, ici à pied
        },
        (result, status) => {
          if (status === "OK") {
            // Afficher l'itinéraire calculé sur la carte
            directionsRendererRef.current.setDirections(result)
          } else {
            console.error("Échec du calcul d'itinéraire : ", status)
          }
        }
      )

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
    </section>
  )
}
