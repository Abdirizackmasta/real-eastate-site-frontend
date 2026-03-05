import React, { useState } from "react";
import styles from "./Posts.module.css";
import properties from "../../assets/demoData"; // adjust path as needed

export default function AgentPosts() {
  const [filter, setFilter] = useState("All");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filtered = properties.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Land") return p.type === "land";
    if (filter === "Residential") return p.type !== "land" && p.finished;
    if (filter === "Ongoing") return !p.finished;
    return true;
  });

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      console.log(`Property with ID ${id} deleted`);
      // 🔧 later connect with backend API to delete property
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Posts Management</h2>
        <div className={styles.filters}>
          {["All", "Land", "Residential", "Ongoing"].map((type) => (
            <button
              key={type}
              className={filter === type ? styles.active : ""}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Type</th>
              <th>Price (KES)</th>
              <th>Location</th>
              <th>Status</th>
              <th>Date Posted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id}>
                <td>
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className={styles.thumbnail}
                  />
                </td>
                <td>{p.title}</td>
                <td>{p.type}</td>
                <td>{p.price.toLocaleString()}</td>
                <td>{p.location}</td>
                <td>
                  {p.finished ? (
                    <span className={styles.completed}>Completed</span>
                  ) : (
                    <span className={styles.ongoing}>Ongoing</span>
                  )}
                </td>
                <td>{new Date(p.datePosted).toLocaleDateString()}</td>
                <td className={styles.actions}>
                  <button
                    className={styles.viewBtn}
                    onClick={() => setSelectedProperty(p)}
                  >
                    View
                  </button>
                  <button
                    className={`${styles.featureBtn} ${
                      p.featured ? styles.activeFeature : ""
                    }`}
                  >
                    {p.featured ? "Featured" : "Feature"}
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedProperty && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedProperty(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedProperty(null)}
            >
              &times;
            </button>

            <div className={styles.modalContent}>
              <img
                src={selectedProperty.images[0]}
                alt={selectedProperty.title}
                className={styles.modalImage}
              />

              <div className={styles.modalDetails}>
                <h2>{selectedProperty.title}</h2>
                <p>
                  <strong>Type:</strong> {selectedProperty.type}
                </p>
                <p>
                  <strong>Location:</strong> {selectedProperty.location}
                </p>
                <p>
                  <strong>Price:</strong> KES{" "}
                  {selectedProperty.price.toLocaleString()}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {selectedProperty.finished ? "Completed" : "Ongoing"}
                </p>
                <p>
                  <strong>Date Posted:</strong>{" "}
                  {new Date(selectedProperty.datePosted).toLocaleDateString()}
                </p>

                <hr />

                <h3>Agent Details</h3>
                <p>
                  <strong>Name:</strong>{" "}
                  {selectedProperty.agent?.name || "Unknown"}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  {selectedProperty.agent?.email || "Not provided"}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  {selectedProperty.agent?.phone || "Not provided"}
                </p>

                <hr />

                <h3>Description</h3>
                <p>
                  {selectedProperty.description || "No description available."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
