import React from "react";
import styles from "./CoreValues.module.css";
import { FaShieldAlt, FaChartLine, FaHeart, FaBullseye } from "react-icons/fa";

const coreValues = [
  {
    icon: <FaShieldAlt className={styles.icon} />,
    title: "Trust & Integrity",
    text: "We build lasting relationships through honest, transparent dealings and always put our clients' interests first.",
  },
  {
    icon: <FaChartLine className={styles.icon} />,
    title: "Excellence",
    text: "We strive for excellence in every transaction, continuously improving our services and expertise.",
  },
  {
    icon: <FaHeart className={styles.icon} />,
    title: "Client-Centric",
    text: "Our clients are at the heart of everything we do. We listen, understand, and deliver personalized solutions.",
  },
  {
    icon: <FaBullseye className={styles.icon} />,
    title: "Innovation",
    text: "We embrace technology and innovative approaches to make real estate transactions smoother and more efficient.",
  },
];

const CoreValues = () => {
  return (
    <section className={styles.coreValues}>
      <h2 className={styles.heading}>Our Core Values</h2>
      <p className={styles.subheading}>
        These principles guide everything we do and define who we are as a
        company
      </p>

      <div className={styles.valuesGrid}>
        {coreValues.map((value, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
