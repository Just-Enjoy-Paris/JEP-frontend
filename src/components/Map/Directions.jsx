import { useEffect, useRef } from "react"
import jsonData from "../../data/places.geo.json"

export default function Directions({ map, showItinerary }) {
  const directionsRendererRef = useRef(null)

  useEffect(() => {
    if (!map) return

    // Créer un objet DirectionsRenderer pour afficher l'itinéraire (mais ne pas l'afficher pour le moment)
    directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
      map: map,
      visible: false
    })

    if (showItinerary) {
      calculateItinerary()
    }
  }, [map, showItinerary])

  const calculateItinerary = () => {
    // Créer un objet DirectionsService pour envoyer la requête de calcul d'itinéraire
    const directionsService = new window.google.maps.DirectionsService()

    // Créer un tableau de waypoints pour les étapes intermédiaires de l'itinéraire
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

    // Envoyer la requête de calcul d'itinéraire
    directionsService.route(
      {
        origin: { lat: waypoints[0].location.lat, lng: waypoints[0].location.lng },
        destination: { lat: waypoints[waypoints.length - 1].location.lat, lng: waypoints[waypoints.length - 1].location.lng },
        waypoints: waypoints,
        travelMode: "WALKING" // Mode de transport, ici à pied
      },
      (result, status) => {
        if (status === "OK") {
          // Afficher l'itinéraire calculé sur la carte
          directionsRendererRef.current.setDirections(result)
          directionsRendererRef.current.setVisible(true)
        } else {
          console.error("Échec du calcul d'itinéraire : ", status)
        }
      }
    )
  }

  return null
}
