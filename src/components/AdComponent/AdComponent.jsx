import { useState, useEffect } from "react";

const AdComponent = ({ ads }) => {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    if (ads) {
      setAdvertisements(ads);
    }
  }, [ads]);

  return (
    <div className="ad-container">
      {advertisements.map((ad, index) => (
        <div key={index} className="ad">
          <h3>{ad.title}</h3>
          <p>{ad.description}</p>
          {ad.image && <img src={ad.image} alt={ad.title} />}
          {ad.link && (
            <a href={ad.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdComponent;
