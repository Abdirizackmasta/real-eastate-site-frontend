import React, { useState } from "react";
import styles from "./Clients.module.css";

const sampleClients = [
  {
    id: 1,
    name: "Alice Kimani",
    email: "alice@example.com",
    enquiries: [
      {
        id: 101,
        property: "Luxury Apartment in Westlands",
        date: "2025-10-10",
      },
      {
        id: 102,
        property: "2 Bedroom House in Kileleshwa",
        date: "2025-10-14",
      },
    ],
  },
  {
    id: 2,
    name: "Brian Otieno",
    email: "brian@example.com",
    enquiries: [
      { id: 103, property: "Beachfront Villa in Mombasa", date: "2025-09-25" },
    ],
  },
  {
    id: 3,
    name: "Cynthia Njeri",
    email: "cynthia@example.com",
    enquiries: [],
  },
];

export default function Clients() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [search, setSearch] = useState("");

  const filteredClients = sampleClients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Clients Management</h2>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search client by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.table}>
        <div className={`${styles.row} ${styles.header}`}>
          <div>Name</div>
          <div>Email</div>
          <div>Enquiries</div>
          <div>Actions</div>
        </div>

        {filteredClients.map((client) => (
          <div key={client.id} className={styles.row}>
            <div>{client.name}</div>
            <div>{client.email}</div>
            <div>{client.enquiries.length}</div>
            <div className={styles.actions}>
              <button
                className={styles.viewBtn}
                onClick={() => setSelectedClient(client)}
              >
                View Enquiries
              </button>
              <button className={styles.deleteBtn}>Delete</button>
              <button className={styles.banBtn}>Ban</button>
            </div>
          </div>
        ))}
      </div>

      {selectedClient && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>
              Enquiries by <span>{selectedClient.name}</span>
            </h3>

            {selectedClient.enquiries.length > 0 ? (
              <div className={styles.enquiryList}>
                {selectedClient.enquiries.map((enquiry) => (
                  <div key={enquiry.id} className={styles.enquiryCard}>
                    <h4>{enquiry.property}</h4>
                    <p>Date: {enquiry.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className={styles.emptyText}>
                No enquiries from this client yet.
              </p>
            )}

            <button
              className={styles.closeBtn}
              onClick={() => setSelectedClient(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
