import React from "react";
import styles from "./AboutStat.module.css";
import { FaHome, FaUserFriends, FaMedal, FaGift } from "react-icons/fa";

const stats = [
  { id: 1, icon: <FaHome />, number: "500+", label: "Properties Sold" },
  { id: 2, icon: <FaUserFriends />, number: "1000+", label: "Happy Clients" },
  { id: 3, icon: <FaMedal />, number: "15+", label: "Years Experience" },
  { id: 4, icon: <FaGift />, number: "50+", label: "Expert Agents" },
];

const AboutStats = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.statCard}>
            <div className={styles.icon}>{stat.icon}</div>
            <h3 className={styles.number}>{stat.number}</h3>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStats;
