import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserTie,
  FaHome,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>
          Admin<span>Panel</span>
        </h2>
      </div>

      <nav className={styles.navMenu}>
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaTachometerAlt className={styles.icon} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaUsers className={styles.icon} />
          Users
        </NavLink>

        <NavLink
          to="/admin/posts"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaHome className={styles.icon} />
          Posts
        </NavLink>

        <NavLink
          to="/admin/enquiries"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <FaEnvelope className={styles.icon} />
          Enquiries
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
