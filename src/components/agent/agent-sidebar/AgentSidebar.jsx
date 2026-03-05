import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./AgentSidebar.module.css";

const AgentSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <button className={styles.toggle} onClick={() => setOpen(!open)}>
          ☰
        </button>
        <h3 className={styles.title}>Menu</h3>
        <nav>
          <NavLink to="/agent" end>
            Dashboard
          </NavLink>
          <NavLink to="/agent/upload">Upload Post</NavLink>
          <NavLink to="/agent/manage">Manage Posts</NavLink>
          <NavLink to="/agent/enquiries">Enquiries</NavLink>
          <NavLink to="/agent/visitors">Visitors</NavLink>
        </nav>
      </div>
    </>
  );
};

export default AgentSidebar;
