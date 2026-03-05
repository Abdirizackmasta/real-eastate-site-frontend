import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Company Info */}
        <div className={styles.footerSection}>
          <h3 className={styles.logo}>Guriflex</h3>
          <p>
            Your trusted partner in real estate — helping you find, buy, sell,
            or manage your dream properties with ease and confidence.
          </p>
          <div className={styles.socialIcons}>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/latestproperties">Properties</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h4>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <FaPhoneAlt /> +254 724 935 735
            </li>
            <li>
              <FaEnvelope /> info@guriflex.co.ke
            </li>
            <li>
              <FaMapMarkerAlt /> Nairobi, Kenya
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>
          © {new Date().getFullYear()} Guriflex Real Estate. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
