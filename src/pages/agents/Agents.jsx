import React, { useState } from "react";
import styles from "./Agents.module.css";

const sampleAgents = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Agent",
    posts: [
      {
        id: 101,
        title: "Luxury Apartment in Westlands",
        date: "2025-10-10",
        enquiries: 5,
      },
      {
        id: 102,
        title: "2 Bedroom House in Kileleshwa",
        date: "2025-10-15",
        enquiries: 2,
      },
    ],
  },
  {
    id: 2,
    name: "Mary Wanjiku",
    email: "mary@example.com",
    role: "Agent",
    posts: [
      {
        id: 201,
        title: "Beachfront Villa in Mombasa",
        date: "2025-09-20",
        enquiries: 8,
      },
    ],
  },
];

export default function Agents() {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [search, setSearch] = useState("");

  const filteredAgents = sampleAgents.filter((agent) =>
    agent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Agents Management</h2>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search agent by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.header}`}>
          <div>Name</div>
          <div>Email</div>
          <div>Posts</div>
          <div>Actions</div>
        </div>

        {filteredAgents.map((agent) => (
          <div key={agent.id} className={styles.row}>
            <div>{agent.name}</div>
            <div>{agent.email}</div>
            <div>{agent.posts.length}</div>
            <div className={styles.actions}>
              <button
                className={styles.viewBtn}
                onClick={() => setSelectedAgent(agent)}
              >
                View Posts
              </button>
              <button className={styles.banBtn}>Ban</button>
            </div>
          </div>
        ))}
      </div>

      {selectedAgent && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>
              Posts by <span>{selectedAgent.name}</span>
            </h3>
            <div className={styles.postsList}>
              {selectedAgent.posts.map((post) => (
                <div key={post.id} className={styles.postCard}>
                  <h4>{post.title}</h4>
                  <p>Uploaded: {post.date}</p>
                  <p>Enquiries: {post.enquiries}</p>
                  <div className={styles.postActions}>
                    <button className={styles.featureBtn}>Feature</button>
                    <button className={styles.deleteBtn}>Delete</button>
                    <button className={styles.viewEnquiryBtn}>
                      View Enquiries
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedAgent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
