import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/latestproperties", label: "Properties" },
  ];

  return (
    <header className={styles.header}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <div className={styles.contact}>
            <a
              className={styles.contactLink}
              href="tel:+1234567890"
              aria-label="Phone"
            >
              📞 +1 (234) 567-890
            </a>
            <span className={styles.dot} aria-hidden="true">
              •
            </span>
            <a
              className={styles.contactLink}
              href="mailto:hello@example.com"
              aria-label="Email"
            >
              ✉️ hello@example.com
            </a>
          </div>

          <div className={styles.social}>
            <a
              className={styles.iconBtn}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              {/* twitter svg */}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M22 5.9c-.6.3-1.2.5-1.9.6a3.2 3.2 0 0 0-5.5 2.2c0 .2 0 .3 0 .5A9 9 0 0 1 3.6 4.8a3.2 3.2 0 0 0 .9 4.3c-.5 0-1-.2-1.4-.4 0 1.4 1 2.7 2.4 3-.5.1-1 .2-1.5.1.4 1.2 1.6 2 3 2A6.5 6.5 0 0 1 2 17.4 9.2 9.2 0 0 0 7.9 20c6.1 0 9.4-5 9.4-9.4v-.4c.6-.5 1-1.1 1.4-1.8-.6.3-1.2.5-1.9.6z"></path>
              </svg>
            </a>

            <a
              className={styles.iconBtn}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              {/* linkedin svg */}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M6.94 21H2.69V9.5h4.25V21zM4.82 7.9a2.47 2.47 0 1 1 0-4.94 2.47 2.47 0 0 1 0 4.94zM21 21h-4.26v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95V21H8.4V9.5H12v1.6h.06c.56-1.06 1.93-2.18 3.97-2.18C20.1 8.92 21 11.1 21 14.28V21z"></path>
              </svg>
            </a>

            <a
              className={styles.iconBtn}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              {/* instagram svg */}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zm5.8-9.8a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3z"></path>
              </svg>
            </a>

            <a
              className={styles.iconBtn}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              {/* facebook svg */}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 3h-2.1v7A10 10 0 0 0 22 12"></path>
              </svg>
            </a>

            <a
              className={styles.iconBtn}
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              {/* tiktok svg */}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M16 8.1a4.4 4.4 0 0 0 2.6.8V6.5a2.9 2.9 0 0 1-1.4-.4 3.1 3.1 0 0 1-1.2-1.2 3 3 0 0 1-.4-1.4h-2.2v9a2.3 2.3 0 1 1-1.9-2.3V8a4.5 4.5 0 1 0 4.5 4.4V8.1z"></path>
              </svg>
            </a>

            <a
              className={styles.iconBtn}
              href="https://wa.me/254712345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              {/* whatsapp svg */}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12.04 2a9.93 9.93 0 0 0-8.4 15.2L2 22l4.9-1.6a10 10 0 1 0 5.14-18.4zm0 18.2a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3a8.2 8.2 0 1 1 6.6 3.5zm4.6-6.1c-.3-.1-1.7-.9-2-.9s-.4 0-.6.3c-.2.3-.7.9-.8 1-.1.1-.3.2-.6.1s-1.1-.4-2.1-1.3a7.6 7.6 0 0 1-1.4-1.8c-.1-.3 0-.5.1-.7.1-.1.3-.3.4-.5s.2-.3.3-.5.1-.3 0-.5c-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.5-.6-.5h-.6c-.2 0-.5.1-.7.3-.2.3-.9.8-.9 2s.9 2.3 1 2.4 1.8 2.8 4.4 3.9c.6.3 1 .5 1.3.6.6.2 1.1.2 1.5.1.4 0 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.3-.1 0-.3-.1-.6-.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo} aria-label="Homepage">
              <img src="/logo.png" alt="YourBrand" />
            </Link>
          </div>

          <nav className={styles.nav} aria-label="Primary Navigation">
            <ul
              className={`${styles.navList} ${mobileOpen ? styles.open : ""}`}
            >
              {navLinks.map((link) => (
                <li key={link.to} className={styles.navItem}>
                  <Link
                    className={styles.navLink}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Link className={styles.cta} to="/signup">
              Signup
            </Link>

            <button
              className={styles.burger}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
            >
              {mobileOpen ? (
                <HiOutlineX size={24} /> // X icon when menu is open
              ) : (
                <HiOutlineMenu size={24} /> // Hamburger icon when menu is closed
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
