import React from "react";
import styles from "./Dashboard.module.css";
import Card from "../../components/card/Card";
import Chart from "../../components/chart/Chart";
import { Table } from "lucide-react";

const Dashboard = () => {
  const summaryData = [
    { title: "Total Users", value: 1240 },
    { title: "Agents", value: 320 },
    { title: "Posts", value: 860 },
    { title: "Enquiries", value: 145 },
  ];

  const recentPosts = [
    { title: "2 Bedroom Apartment in Nairobi", time: "2 hours ago" },
    { title: "Luxurious Villa for Sale", time: "1 day ago" },
    { title: "Affordable Bedsitter in Kasarani", time: "3 days ago" },
    { title: "Modern Office Space", time: "5 days ago" },
  ];

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h2>Dashboard Overview</h2>
        <p>Monitor system activity, performance, and updates at a glance.</p>
      </header>

      {/* Summary Cards */}
      <div className={styles.cardsContainer}>
        {summaryData.map((item, index) => (
          <Card key={index} title={item.title} value={item.value} />
        ))}
      </div>

      {/* Chart Section */}
      <section className={styles.chartSection}>
        <h3>Monthly Uploads Overview</h3>
        <Chart />
      </section>

      {/* Recent Uploads */}
      <section className={styles.recentSection}>
        <div className={styles.recentHeader}>
          <h3>Recent Uploads</h3>
          <span className={styles.viewAll}>View All</span>
        </div>
        <Table data={recentPosts} />
      </section>
    </div>
  );
};

export default Dashboard;
