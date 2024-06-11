import { useEffect, useRef, useContext } from "react"
import { DataContext } from "../../../context/data.context"
import AdComponent from "../AdComponent/AdComponent"

export default function MapRoute({ map }) {
  const mapRef = useRef(null)
  const directionsRendererRef = useRef(null)
  const { places } = useContext(DataContext)

  useEffect(() => {
    if (!map || !window.google) return

    mapRef.current = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 48.8566, lng: 2.3522 },
      zoom: 12,
      mapId: "fe2668b01b9cb7be"
    })

    // DirectionsRenderer pour afficher l'itinéraire sur la carte
    directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
      map: mapRef.current,
    })

    const limitedPlaces = places.slice(0, 25)

    const directionsService = new window.google.maps.DirectionsService();

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
          directionsRendererRef.current.setDirections(result)
        } else {
          console.error("Échec du calcul d'itinéraire : ", status)
        }
      }
    )

  }, [map, places])

  return (
    <section>
      <div id="map" className="mapContainer"></div>
      <AdComponent/>
    </section>  )
}
