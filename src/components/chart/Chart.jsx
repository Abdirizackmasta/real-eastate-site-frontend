import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import styles from "./Chart.module.css";

const data = [
  { month: "Jan", posts: 20 },
  { month: "Feb", posts: 25 },
  { month: "Mar", posts: 18 },
  { month: "Apr", posts: 30 },
  { month: "May", posts: 22 },
  { month: "Jun", posts: 28 },
  { month: "Jul", posts: 35 },
  { month: "Aug", posts: 40 },
  { month: "Sep", posts: 33 },
  { month: "Oct", posts: 38 },
  { month: "Nov", posts: 27 },
  { month: "Dec", posts: 31 },
];

const Chart = () => {
  return (
    <div className={styles.chart}>
      <h3>Monthly Posts Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="posts" fill="#4e9eff" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
