import React from "react";
import styles from "./Blogs.module.css";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    image: "./Nairobi2.jpg",
    category: "Market Insights",
    title: "5 Key Factors Driving Kenya’s Real Estate Growth",
    author: "Guriflex Admin",
    date: "10/02/2025",
    description:
      "Kenya’s real estate sector continues to evolve rapidly, fueled by urban expansion, infrastructure projects, and rising middle-class demand.",
  },
  {
    id: 2,
    image: "./Nairobi2.jpg",
    category: "Property Tips",
    title: "How to Choose the Right Apartment in Nairobi",
    author: "Jane Mwangi",
    date: "09/28/2025",
    description:
      "From location to amenities, here’s what every buyer and renter should consider when selecting a new apartment in Nairobi’s fast-growing market.",
  },
  {
    id: 3,
    image: "./Nairobi2.jpg",
    category: "Investment",
    title: "Is Commercial Real Estate Still a Good Investment in 2025?",
    author: "Guriflex Team",
    date: "09/14/2025",
    description:
      "Commercial properties remain a key investment option, but changing market dynamics and work trends are reshaping demand and returns.",
  },
  {
    id: 4,
    image: "./Nairobi2.jpg",
    category: "Development",
    title: "Upcoming Real Estate Developments to Watch in Kenya",
    author: "Guriflex Admin",
    date: "08/30/2025",
    description:
      "Major infrastructure and housing projects across Nairobi, Kisumu, and Mombasa are redefining the property landscape in 2025.",
  },
];

export default function Blogs() {
  const navigate = useNavigate();

  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className={styles.blogSection}>
      <h2 className={styles.sectionTitle}>From Our Blog</h2>
      <p className={styles.subtitle}>
        Latest insights and news from Kenya’s real estate market
      </p>

      <div className={styles.blogGrid}>
        {latestPosts.map((post) => (
          <div key={post.id} className={styles.card}>
            <img src={post.image} alt={post.title} className={styles.image} />
            <div className={styles.cardBody}>
              <span className={styles.category}>{post.category}</span>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <div className={styles.meta}>
                <span>
                  <FaUserCircle /> {post.author}
                </span>
                <span>
                  <FaCalendarAlt /> {post.date}
                </span>
              </div>
              <p className={styles.description}>{post.description}</p>
              <button className={styles.readMore}>Read More →</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <button
          className={styles.viewAllButton}
          onClick={() => navigate("/blogs")}
        >
          View All Posts →
        </button>
      </div>
    </section>
  );
}
