import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./favoriteComponent.css";

const FavoriteComponent = () => {
  const [favoritePlaces, setFavoritePlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("/user/getFavs");
        setFavoritePlaces(response.data.favPlaces);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return <div>Chargement des favoris...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  if (favoritePlaces.length === 0) {
    return <div>Aucun lieu en favoris.</div>;
  }

  return (
    <div className="favorite-list">
      {favoritePlaces.map((placeId) => (
        <Link to={`/place/${placeId}`} key={placeId} className="favorite-item">
          <div className="favorite-details">
            {/* Ajoutez ici des détails supplémentaires si vous en avez, par exemple le nom du lieu, l'adresse, etc. */}
            <p>Lieu ID: {placeId}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FavoriteComponent;
