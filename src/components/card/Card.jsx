import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, value }) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};

export default Card;
