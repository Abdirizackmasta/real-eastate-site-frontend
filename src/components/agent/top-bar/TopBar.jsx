import React from "react";
import styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Agent Dashboard</h2>
      <div className={styles.right}>
        <i className="fas fa-bell"></i>
        <img
          src="https://i.pravatar.cc/40"
          alt="agent"
          className={styles.avatar}
        />
      </div>
    </nav>
  );
};

export default TopBar;
