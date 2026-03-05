import React, { useState } from "react";
import styles from "./PropertyCard.module.css";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const {
    title,
    location,
    price,
    size,
    sizeUnit,
    type,
    transaction,
    bedrooms,
    washrooms,
    finished,
    datePosted,
    images,
    estimatedCompletion,
    progress,
  } = property;

  const [saved, setSaved] = useState(false);
  const toggleSave = () => {
    setSaved(!saved);
  };
  const postedDate = new Date(datePosted);
  const daysAgo = Math.floor((new Date() - postedDate) / (1000 * 60 * 60 * 24));

  // Only show progress for UNFINISHED projects (not land)
  const isUnderConstruction = finished === false && type !== "land";

  // Progress bar color
  const progressColor =
    progress >= 70 ? "#2e8b57" : progress >= 40 ? "#ff9800" : "#ff3d00";

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link to={`/property/${property.id}`}>
          <img src={images[0]} alt={title} className={styles.image} />
        </Link>

        {/* Transaction badge (Sale, Rent, Lease) */}
        <span className={`${styles.badge} ${styles[transaction]}`}>
          {transaction.toUpperCase()}
        </span>
        <span className={styles.bookmark} onClick={toggleSave}>
          {saved ? <FaBookmark /> : <FaRegBookmark />}
        </span>

        {/* Type badge (Apartment, Land, etc.) */}
        <span className={styles.typeBadge}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.location}>{location}</p>

        <div className={styles.details}>
          {bedrooms && (
            <span>
              <strong>{bedrooms}</strong> Beds
            </span>
          )}
          {washrooms && (
            <span>
              <strong>{washrooms}</strong> Baths
            </span>
          )}
          <span>
            <strong>{size}</strong> {sizeUnit}
          </span>
        </div>

        <p className={styles.price}>Ksh {price.toLocaleString()}</p>
        <div className={styles.meta}>
          <span>Posted {daysAgo} days ago</span>
        </div>

        {/* Show ONLY for unfinished (under construction) projects */}
        {isUnderConstruction && (
          <div className={styles.construction}>
            <span className={styles.ongoingBadge}>Ongoing Project</span>
            <p className={styles.underConstruction}>🏗️ Under Construction</p>

            {estimatedCompletion && (
              <p className={styles.completion}>
                Estimated completion:{" "}
                {new Date(estimatedCompletion).toLocaleDateString()}
              </p>
            )}

            {typeof progress === "number" && (
              <>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{
                      width: `${progress}%`,
                      backgroundColor: progressColor,
                    }}
                  ></div>
                </div>
                <p className={styles.progressText}>{progress}% complete</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
