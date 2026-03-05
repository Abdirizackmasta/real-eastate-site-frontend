import React from "react";
import styles from "./SavedProperties.module.css";

const SavedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x250",
      title: "Modern Luxury Villa",
      location: "Karen, Nairobi",
      price: "$1,250,000",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x250",
      title: "Beachfront Apartment",
      location: "Nyali, Mombasa",
      price: "$850,000",
    },
  ];

  return (
    <div className={styles.savedContainer}>
      <h2 className={styles.heading}>Saved Properties</h2>
      <div className={styles.grid}>
        {properties.map((property) => (
          <div key={property.id} className={styles.card}>
            <img
              src={property.image}
              alt={property.title}
              className={styles.image}
            />
            <div className={styles.content}>
              <h3 className={styles.title}>{property.title}</h3>
              <p className={styles.location}>{property.location}</p>
              <p className={styles.price}>{property.price}</p>
              <div className={styles.actions}>
                <a href={`/property/${property.id}`} className={styles.viewBtn}>
                  View Property
                </a>
                <button className={styles.removeBtn}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedProperties;
