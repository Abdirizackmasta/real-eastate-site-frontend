import React from "react";
import styles from "./WhatWeDo.module.css";

const services = [
  {
    icon: "🏠",
    title: "Buy A New Home",
    description:
      "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
  },
  {
    icon: "💲",
    title: "Sell a Property",
    description:
      "Sell confidently with expert guidance and effective strategies, showcasing your property’s best features for a successful sale.",
  },
  {
    icon: "📃",
    title: "Rent a Home",
    description:
      "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
  },
];

export default function WhatWeDo() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What We Do?</h2>
      <p className={styles.subtitle}>
        We provide comprehensive real estate services to help you with all your
        property needs across Kenya
      </p>
      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
            <button className={styles.button}>Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
