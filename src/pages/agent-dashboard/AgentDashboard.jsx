import React from "react";
import styles from "./AgentDashboard.module.css";

const AgentDashboard = () => {
  const stats = [
    { label: "Total Posts", value: 12 },
    { label: "Featured Listings", value: 4 },
    { label: "Visitors This Week", value: 230 },
    { label: "New Enquiries", value: 15 },
  ];

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Dashboard Summary</h2>
      <div className={styles.grid}>
        {stats.map((s, i) => (
          <div key={i} className={styles.card}>
            <h4>{s.label}</h4>
            <p>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentDashboard;
