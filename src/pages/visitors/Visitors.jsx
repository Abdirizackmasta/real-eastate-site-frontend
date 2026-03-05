import React from "react";
import styles from "./Visitors.module.css";

const Visitors = () => {
  const visitors = [
    { name: "John Doe", property: "Luxury Villa", time: "2 hours ago" },
    { name: "Sarah Smith", property: "Beach House", time: "1 day ago" },
  ];

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Recent Visitors</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Property</th>
              <th>Visited</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((v, i) => (
              <tr key={i}>
                <td>{v.name}</td>
                <td>{v.property}</td>
                <td>{v.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Visitors;
