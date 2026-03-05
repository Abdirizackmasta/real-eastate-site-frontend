import React from "react";
import { useParams } from "react-router-dom";
import properties from "../../assets/demoData";
import styles from "./PropertyDetails.module.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Property not found 😢
      </h2>
    );
  }

  return (
    <div className={styles.propertyDetails}>
      {/* Header Section */}
      <div className={styles.propertyHeader}>
        <h1>{property.title}</h1>
        <p className={styles.location}>{property.location}</p>
        <h2 className={styles.price}>
          {property.transaction === "rent" ? "Rent: " : "Price: "}
          KES {property.price.toLocaleString()}
        </h2>
      </div>

      {/* Image Gallery */}
      <div className={styles.imageGallery}>
        {property.images.map((img, index) => (
          <img key={index} src={img} alt={`Property ${index + 1}`} />
        ))}
      </div>

      {/* Description */}
      <div className={styles.propertyDescription}>
        <h3>About this Property</h3>
        <p>{property.description}</p>

        <div className={styles.propertyInfo}>
          <p>
            <strong>Size:</strong> {property.size} {property.sizeUnit}
          </p>
          {property.bedrooms && (
            <p>
              <strong>Bedrooms:</strong> {property.bedrooms}
            </p>
          )}
          {property.washrooms && (
            <p>
              <strong>Washrooms:</strong> {property.washrooms}
            </p>
          )}
          <p>
            <strong>Type:</strong> {property.type}
          </p>
          <p>
            <strong>Transaction:</strong> {property.transaction}
          </p>
          {!property.finished && property.progress && (
            <p>
              <strong>Project Progress:</strong> {property.progress}%
            </p>
          )}
          {!property.finished && property.estimatedCompletion && (
            <p>
              <strong>Est. Completion:</strong> {property.estimatedCompletion}
            </p>
          )}
        </div>
      </div>

      {/* Agent Info */}
      <div className={styles.agentSection}>
        <div className={styles.agentInfo}>
          <h3>Agent: {property.agent.name}</h3>
          <p>📞 {property.agent.phone}</p>
          <p>✉️ {property.agent.email}</p>
        </div>
      </div>

      {/* Enquiry Form */}
      <div className={styles.enquiryForm}>
        <h3>Make an Enquiry</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Phone Number" />
          <textarea rows="5" placeholder="Your Message..." required></textarea>
          <button type="submit">Send Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;
