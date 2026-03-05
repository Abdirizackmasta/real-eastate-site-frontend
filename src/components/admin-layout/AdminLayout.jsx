import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./AdminLayout.module.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../nav-bar/NavBar";

const AdminLayout = () => {
  return (
    <div className={styles.adminLayout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.pageContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
