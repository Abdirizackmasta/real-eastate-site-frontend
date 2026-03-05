import React from "react";
import styles from "./ReachUs.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ReachUs = () => {
  return (
    <section className={styles.reachSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>How to Reach Us</h2>
        <p className={styles.subtitle}>
          Multiple ways to connect with our team for all your real estate needs
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <FaPhoneAlt />
            </div>
            <h3>Phone</h3>
            <p className={styles.detail}>+254724935735</p>
            <p className={styles.desc}>Call us for immediate assistance</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p className={styles.detail}>
              info@guriflex.co.ke
              <br />
              sales@guriflex.co.ke
            </p>
            <p className={styles.desc}>Send us an email anytime</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <FaMapMarkerAlt />
            </div>
            <h3>Address</h3>
            <p className={styles.detail}>
              Nairobi CBD
              <br />
              Kenya
            </p>
            <p className={styles.desc}>Visit our office</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconBox}>
              <FaClock />
            </div>
            <h3>Business Hours</h3>
            <p className={styles.detail}>
              Mon–Fri: 8:00 AM – 6:00 PM
              <br />
              Sat: 9:00 AM – 4:00 PM
            </p>
            <p className={styles.desc}>We're here to help</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;
