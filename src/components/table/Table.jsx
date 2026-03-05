import React from "react";
import styles from "./Table.module.css";

const Table = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Post Title</th>
          <th>Time Uploaded</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
