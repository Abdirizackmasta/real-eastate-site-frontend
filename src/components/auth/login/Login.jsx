// src/components/auth/Login.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import styles from "./Login.module.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>

        <button className={styles.googleBtn}>
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className={styles.switchText}>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
