import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Find Your Dream Home Today</h1>
          <p className={styles.subtitle}>
            Discover stunning properties that fit your lifestyle and budget — where comfort meets class.
          </p>
          <button className={styles.btn}>Explore Properties</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
