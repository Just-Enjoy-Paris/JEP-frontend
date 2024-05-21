import { useEffect, useRef } from "react"
import jsonData from "../../data/places.geo.json"

export default function Directions({ map, showItinerary }) {
  const directionsRendererRef = useRef(null)

  useEffect(() => {
    // Vérifier que l'objet Map a été initialisé
    if (!map) return

    // objet DirectionsRenderer pour afficher l'itinéraire
    directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
      map: null
    })

    // Écouter l'événement idle de l'objet Map pour associer l'objet DirectionsRenderer à l'objet Map
    const idleListener = map.addListener("idle", () => {
      // Associer l'objet DirectionsRenderer à l'objet Map
      directionsRendererRef.current.setMap(map)
      if (showItinerary) {
        calculateItinerary()
      } else {
        // Masquer l'itinéraire
        directionsRendererRef.current.setDirections({ routes: [] })
      }
      // Supprimer l'écouteur d'événement idle
      idleListener.remove()
    })
  }, [map, showItinerary])

  const calculateItinerary = () => {
    // objet DirectionsService pour envoyer la requête de calcul d'itinéraire
    const directionsService = new window.google.maps.DirectionsService()

    // tableau de waypoints pour les étapes intermédiaires de l'itinéraire
    const waypoints = []
    for (let i = 0; i < 25; i++) {
      waypoints.push({
        location: {
          lat: jsonData[i].geometry.coordinates[1],
          lng: jsonData[i].geometry.coordinates[0]
        },
        stopover: true
      })
    }

    // requête de calcul d'itinéraire
    directionsService.route(
      {
        origin: { lat: waypoints[0].location.lat, lng: waypoints[0].location.lng },
        destination: { lat: waypoints[waypoints.length - 1].location.lat, lng: waypoints[waypoints.length - 1].location.lng },
        waypoints: waypoints,
        travelMode: "WALKING"
      },
      (result, status) => {
        if (status === "OK") {
          // itinéraire calculé sur la carte
          directionsRendererRef.current.setDirections(result)
        } else {
          console.error("Échec du calcul d'itinéraire : ", status)
        }
      }
    )
  }

  return null
}
