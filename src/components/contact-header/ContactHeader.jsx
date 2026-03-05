import React from "react";
import styles from "./ContactHeader.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCalendarAlt,
} from "react-icons/fa";

const ContactHeader = () => {
  return (
    <header className={styles.contactHeader}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <button className={styles.btn}>Get In Touch</button>
        <h1>Contact Our Expert Team</h1>
        <p>
          Ready to find your perfect property or need expert real estate
          services? <br />
          We’re here to help you every step of the way.
        </p>

        <div className={styles.contactInfo}>
          <span>
            <FaPhoneAlt /> +254 724 935 735
          </span>
          <span>
            <FaEnvelope /> info@guriflex.co.ke
          </span>
          <span>
            <FaMapMarkerAlt /> Nairobi, Kenya
          </span>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
