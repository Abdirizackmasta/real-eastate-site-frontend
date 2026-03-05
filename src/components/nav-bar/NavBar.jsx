import React from "react";
import styles from "./Navbar.module.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h3 className={styles.title}>Dashboard</h3>
      <div className={styles.rightSection}>
        <FaBell className={styles.icon} />
        <div className={styles.profile}>
          <FaUserCircle className={styles.avatar} />
          <span className={styles.name}>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
