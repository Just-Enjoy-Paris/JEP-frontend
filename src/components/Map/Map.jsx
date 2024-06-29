import { useContext, useEffect } from "react"
import "./map.css"
import { DataContext } from "../../../context/data.context"
import AdComponent from "../AdComponent/AdComponent"
import MarkerSoif from "../../img/PINS/Pin_BIERE.png"
import MarkerRestaurant from "../../img/PINS/Pin_RESTO.png"
import MarkerCulture from "../../img/PINS/Pin_CULTURE_3.png"
import MarkerHotel from "../../img/PINS/Pin_HOTEL.png"
import MarkerGourmandise from "../../img/PINS/Pin_COOKIE.png"
import MarkerPratique from "../../img/PINS/Pin_PRATIQUE_2.png"
import MarkerShopping from "../../img/PINS/Pin_SHOPPING.png"
import MarkerCourses from "../../img/PINS/Pin_COURSES_2.png"
import MarkerCluster from "../../img/PINS/Pin_CLUSTER.svg"

// Importez la bibliothèque MarkerClusterer
import { MarkerClusterer } from "@googlemaps/markerclusterer"

export default function Map() {
  const { places } = useContext(DataContext)

  const categoryMap = {
    Restaurant: [
      "Restaurant",
      "Fast food",
      "Streetfood Chinoise",
      "Restaurant Algerien",
      "Restaurant Italien",
      "Brasserie"
    ],
    Soif: ["Bar", "Pub", "Café"],
    Shopping: [
      "Boutique",
      "Bijouterie",
      "Association",
      "Boutique de vêtements",
      "Boutique de porcelaine",
      "Parfumerie"
    ],
    Gourmandise: [
      "Pâtisserie",
      "Bubble tea",
      "Salon de the",
      "Marchand de glaces"
    ],
    Courses: ["Boulangerie", "Primeur", "Marché"],
    Hôtel: ["Hotel"],
    Culture: ["Boutique d'objets religieux", "Librairie", "Galerie d'art"],
    Pratique: [
      "Salon de coiffure",
      "Boutique de CBD",
      "Vente et réparation de cycles",
      "Service d'impression 3D"
    ]
  }

  const getMarkerIcon = category => {
    if (categoryMap.Restaurant.includes(category)) {
      return MarkerRestaurant
    } else if (categoryMap.Soif.includes(category)) {
      return MarkerSoif
    } else if (categoryMap.Shopping.includes(category)) {
      return MarkerShopping
    } else if (categoryMap.Gourmandise.includes(category)) {
      return MarkerGourmandise
    } else if (categoryMap.Hôtel.includes(category)) {
      return MarkerHotel
    } else if (categoryMap.Culture.includes(category)) {
      return MarkerCulture
    } else if (categoryMap.Pratique.includes(category)) {
      return MarkerPratique
    } else if (categoryMap.Courses.includes(category)) {
      return MarkerCourses
    } else {
      return null
    }
  }

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

      const markers = places.map(point => {
        const category = Array.isArray(point.properties.category)
          ? point.properties.category[0]
          : point.properties.category
        const icon = getMarkerIcon(category)

        const marker = new googleMaps.Marker({
          position: {
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0]
          },
          title: point.properties.name,
          icon: {
            url: icon,
            scaledSize: new googleMaps.Size(26, 32)
          }
        })

        // Create an info window for each marker
        const infoWindow = new googleMaps.InfoWindow({
          content: `
            <div>
              <h3>${point.properties.name}</h3>
              <p>${point.properties.address}</p>
              <p>${point.properties.category}</p>
            </div>
          `
        })

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })

        return marker
      })

      const clusterStyles = [
        {
          textColor: "white",
          url: MarkerCluster,
          height: 30,
          width: 30
        },
        {
          textColor: "white",
          url: MarkerCluster,
          height: 40,
          width: 40
        },
        {
          textColor: "white",
          url: MarkerCluster,
          height: 50,
          width: 50
        }
      ]

      // Utilisez MarkerClusterer pour regrouper les marqueurs avec des styles personnalisés
      new MarkerClusterer({
        markers,
        map,
        renderer: {
          render({ count, position }) {
            const index = Math.min(
              count.toString().length - 1,
              clusterStyles.length - 1
            )
            const style = clusterStyles[index]

            return new googleMaps.Marker({
              position,
              icon: {
                url: style.url,
                scaledSize: new googleMaps.Size(style.width, style.height),
                labelOrigin: new googleMaps.Point(
                  style.width / 2,
                  style.height / 2
                )
              },
              label: {
                text: String(count),
                color: style.textColor,
                fontSize: "16px",
                fontWeight: "bold"
              }
            })
          }
        }
      })
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
      <AdComponent />
    </section>
  )
}
