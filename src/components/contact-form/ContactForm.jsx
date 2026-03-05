import React from "react";
import styles from "./ContactForm.module.css";
import {
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegCommentDots,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Left side - Form */}
        <div className={styles.formCard}>
          <h2>Send Us a Message</h2>
          <p>
            Fill out the form below and we'll get back to you within 24 hours
          </p>

          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>First Name *</label>
                <input type="text" placeholder="Amirul" required />
              </div>
              <div className={styles.formGroup}>
                <label>Last Name *</label>
                <input type="text" placeholder="Abdallah" required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>Email Address *</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number *</label>
                <input type="tel" placeholder="+2547XXXXXXXX" required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>Inquiry Type *</label>
                <select required>
                  <option value="">Select inquiry type</option>
                  <option>Property Purchase</option>
                  <option>Property Leasing</option>
                  <option>Investment</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Preferred Contact Method</label>
                <select>
                  <option>Email</option>
                  <option>Phone</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Message *</label>
              <textarea
                rows="4"
                placeholder="Tell us more about your requirements..."
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.btn}>
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>

        {/* Right side - Map & Social */}
        <div className={styles.infoSection}>
          <div className={styles.mapBox}>
            <iframe
              title="Nairobi Map"
              src="https://www.google.com/maps?q=Nairobi,+Kenya&output=embed"
              loading="lazy"
            ></iframe>
          </div>

          <div className={styles.followBox}>
            <h3>Follow Us</h3>
            <p>Stay connected on social media</p>
            <div className={styles.socials}>
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

          <div className={styles.quickBox}>
            <FaRegCommentDots className={styles.quickIcon} />
            <div>
              <h4>Quick Response Guarantee</h4>
              <p>
                We typically respond to all inquiries within 2–4 hours during
                business hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
