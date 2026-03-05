import React from "react";
import styles from "./AboutHeader.module.css";

const AboutHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Transforming Real Estate in Kenya</h1>
        <p className={styles.subtitle}>
          We are redefining property ownership through innovation, transparency,
          and trust — connecting buyers, sellers, and renters across Kenya with
          ease and confidence.
        </p>
        <button className={styles.button}>About Gurirefx</button>

        <div className={styles.stats}>
          <div className={styles.statBox}>
            <h2 className={styles.statNumber}>500+</h2>
            <p className={styles.statLabel}>Properties Sold</p>
          </div>
          <div className={styles.statBox}>
            <h2 className={styles.statNumber}>1000+</h2>
            <p className={styles.statLabel}>Happy Clients</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
