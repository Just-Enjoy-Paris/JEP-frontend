import { useContext, useEffect } from "react"
import { DataContext } from "../../../context/data.context"
import AdComponent from "../AdComponent/AdComponent"

export default function MapRoute() {
  const { places } = useContext(DataContext)

  useEffect(() => {
    const initMap = () => {
      const googleMaps = window.google.maps

      const map = new googleMaps.Map(document.getElementById("map"), {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 12,
        mapId: "fe2668b01b9cb7be",
      })

      const directionsService = new googleMaps.DirectionsService()
      const directionsRenderer = new googleMaps.DirectionsRenderer({ map })

      // Limiter les lieux à 25
      const limitedPlaces = places.slice(0, 25)

      const waypoints = limitedPlaces.slice(1, -1).map((place) => ({
        location: {
          lat: place.geometry.coordinates[1],
          lng: place.geometry.coordinates[0],
        },
        stopover: true,
      }))

      directionsService.route(
        {
          origin: {
            lat: limitedPlaces[0].geometry.coordinates[1],
            lng: limitedPlaces[0].geometry.coordinates[0],
          },
          destination: {
            lat: limitedPlaces[limitedPlaces.length - 1].geometry.coordinates[1],
            lng: limitedPlaces[limitedPlaces.length - 1].geometry.coordinates[0],
          },
          waypoints: waypoints,
          travelMode: "WALKING",
        },
        (result, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(result)
          } else {
            console.error("Échec du calcul d'itinéraire : ", status)
          }
        }
      )
    }

    const loadGoogleMaps = async () => {
      if (!document.getElementById("google-maps-script")) {
        const script = document.createElement("script")
        script.id = "google-maps-script"
        script.src = `${import.meta.env.VITE_API_URL_AND_KEYMAP}`
        script.async = true
        script.defer = true
        document.body.appendChild(script)
        script.onload = initMap
      } else {
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
      <AdComponent />
    </section>
  )
}
