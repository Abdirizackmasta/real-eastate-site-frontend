// src/components/auth/Signup.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import styles from "./Signup.module.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    userType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>User Type</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="buyer">client</option>
              <option value="agent">Agent</option>
            </select>
          </div>

          <button type="submit" className={styles.btn}>
            Sign Up
          </button>
        </form>

        <button className={styles.googleBtn}>
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className={styles.switchText}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
