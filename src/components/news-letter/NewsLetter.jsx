import React from "react";
import styles from "./Newsletter.module.css";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <button className={styles.updateBtn}>
        <Send size={14} /> Stay Updated
      </button>
      <h2 className={styles.heading}>Get the Latest Property Updates</h2>
      <p className={styles.text}>
        Subscribe to our newsletter and never miss out on new listings, market
        insights, and exclusive deals.
      </p>

      <form className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.input}
        />
        <button type="submit" className={styles.subscribeBtn}>
          Subscribe →
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
