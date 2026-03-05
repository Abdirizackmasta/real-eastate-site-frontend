import React from "react";
import styles from "./Enquiries.module.css";

const AgentEnquiries = () => {
  const data = [
    {
      name: "Jane Kim",
      property: "Modern Apartment",
      msg: "Can I visit this weekend?",
    },
    {
      name: "Ahmed Noor",
      property: "Luxury Villa",
      msg: "Is it still available?",
    },
  ];

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Client Enquiries</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Property</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.property}</td>
                <td>{e.msg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentEnquiries;
