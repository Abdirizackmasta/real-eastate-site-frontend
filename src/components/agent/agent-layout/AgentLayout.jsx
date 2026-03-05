import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AgentLayout.module.css";
import TopBar from "../top-bar/TopBar";
import AgentSidebar from "../agent-sidebar/AgentSidebar";

const AgentLayout = () => {
  return (
    <div className={styles.layout}>
      <AgentSidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.pageContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AgentLayout;
