import React, { useState } from "react";
import styles from "./Users.module.css";

const ITEMS_PER_PAGE = 3;

const Users = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [view, setView] = useState("users"); // users | posts | details
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@gmail.com",
      phone: "0712345678",
      role: "Agent",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Ali",
      email: "sarah.ali@gmail.com",
      phone: "0723456789",
      role: "Client",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Kim",
      email: "michael.kim@gmail.com",
      phone: "0709876543",
      role: "Agent",
      status: "Banned",
    },
    {
      id: 4,
      name: "Linet Mwangi",
      email: "linet.mwangi@gmail.com",
      phone: "0798765432",
      role: "Client",
      status: "Active",
    },
    {
      id: 5,
      name: "Kevin Otieno",
      email: "kevin.otieno@gmail.com",
      phone: "0711122233",
      role: "Agent",
      status: "Active",
    },
  ]);

  const posts = [
    {
      id: 1,
      title: "Luxury Apartment in Nairobi",
      description: "A spacious 3-bedroom apartment with parking.",
      agentId: 1,
    },
    {
      id: 2,
      title: "Beach House in Mombasa",
      description: "Ocean-view villa for holidays.",
      agentId: 1,
    },
    {
      id: 3,
      title: "Studio Apartment",
      description: "Affordable studio in Kilimani.",
      agentId: 5,
    },
  ];

  // 🔍 Filter + Search
  const filteredUsers = users.filter((u) => {
    const matchesRole = filter === "all" || u.role === filter;
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.phone.includes(search);

    return matchesRole && matchesSearch;
  });

  // 📄 Pagination
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // 🔐 Confirm Delete
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  // 🔐 Confirm Ban / Unban
  const handleToggleBan = (id, status) => {
    const action = status === "Active" ? "ban" : "unban";
    if (!window.confirm(`Are you sure you want to ${action} this user?`))
      return;

    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Banned" : "Active" }
          : u
      )
    );
  };

  const handleViewPosts = (agent) => {
    setSelectedAgent(agent);
    setView("posts");
  };

  const handleViewPostDetails = (post) => {
    setSelectedPost(post);
    setView("details");
  };

  const handleBack = () => {
    if (view === "details") setView("posts");
    else setView("users");
  };

  return (
    <div className={styles.usersPage}>
      {view === "users" && (
        <>
          <div className={styles.header}>
            <h2>Manage Users</h2>

            <div className={styles.controls}>
              <input
                type="text"
                placeholder="Search name, email or phone..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className={styles.searchInput}
              />

              <div className={styles.filters}>
                {["all", "Agent", "Client"].map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setFilter(type);
                      setCurrentPage(1);
                    }}
                    className={filter === type ? styles.active : ""}
                  >
                    {type === "all" ? "All" : `${type}s`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td>{startIndex + index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                    <td>
                      <span
                        className={`${styles.status} ${
                          user.status === "Active"
                            ? styles.activeStatus
                            : styles.bannedStatus
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className={styles.actions}>
                      {user.role === "Agent" && (
                        <button
                          className={styles.viewBtn}
                          onClick={() => handleViewPosts(user)}
                        >
                          View Posts
                        </button>
                      )}
                      <button
                        className={styles.deleteBtn}
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                      <button
                        className={
                          user.status === "Active"
                            ? styles.banBtn
                            : styles.unbanBtn
                        }
                        onClick={() => handleToggleBan(user.id, user.status)}
                      >
                        {user.status === "Active" ? "Ban" : "Unban"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}

      {view === "posts" && (
        <div>
          <button onClick={handleBack} className={styles.backBtn}>
            ← Back
          </button>
          <h3>Posts by {selectedAgent.name}</h3>

          <ul className={styles.postsList}>
            {posts
              .filter((p) => p.agentId === selectedAgent.id)
              .map((post) => (
                <li key={post.id} className={styles.postItem}>
                  <strong>{post.title}</strong>
                  <button
                    className={styles.detailsBtn}
                    onClick={() => handleViewPostDetails(post)}
                  >
                    View Details
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}

      {view === "details" && selectedPost && (
        <div className={styles.postDetails}>
          <button onClick={handleBack} className={styles.backBtn}>
            ← Back
          </button>
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.description}</p>
        </div>
      )}
    </div>
  );
};

export default Users;
