import React from "react";
import styles from "./WhyChoose.module.css";
import { FaShieldAlt, FaCogs, FaHandshake } from "react-icons/fa";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaShieldAlt className={styles.icon} />,
      title: "Proven Expertise",
      description:
        "Our seasoned team excels in real estate with years of successful market navigation in Kenya, offering informed decisions and optimal results.",
    },
    {
      icon: <FaCogs className={styles.icon} />,
      title: "Customized Solutions",
      description:
        "We pride ourselves on crafting personalized strategies to match your unique goals, ensuring a seamless real estate journey across Kenya.",
    },
    {
      icon: <FaHandshake className={styles.icon} />,
      title: "Transparent Partnerships",
      description:
        "Transparency is key in our client relationships. We prioritize clear communication and ethical practices, fostering trust throughout Kenya.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="Nairobi2.jpg"
            alt="Modern buildings"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Why Choose Guriflex</h2>
          <p className={styles.subtitle}>
            We are committed to providing exceptional real estate services with
            transparency, professionalism, and expertise in the Kenyan market.
          </p>

          <ul className={styles.features}>
            {features.map((item, index) => (
              <li key={index} className={styles.featureItem}>
                <div className={styles.iconBox}>{item.icon}</div>
                <div>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureDescription}>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
