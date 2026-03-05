import React, { useState } from "react";
import styles from "./ManagePosts.module.css";

const ManagePosts = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Luxury Villa", status: "Available" },
    { id: 2, title: "Beach House", status: "Featured" },
  ]);

  const toggleStatus = (id) =>
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "Featured" ? "Available" : "Featured" }
          : p
      )
    );

  const deletePost = (id) => setPosts(posts.filter((p) => p.id !== id));

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Manage Your Listings</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>{p.status}</td>
                <td>
                  <button onClick={() => toggleStatus(p.id)}>Toggle</button>
                  <button
                    onClick={() => deletePost(p.id)}
                    className={styles.delete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePosts;
