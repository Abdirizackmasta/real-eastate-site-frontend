import React from "react";
import styles from "./OurServices.module.css";
import { FaCheckCircle } from "react-icons/fa";
import serviceImg from "../../../public/story.jpg"; // 👈 replace this with your own image path

const services = [
  "Residential Property Sales",
  "Property Management Services",
  "Property Valuation & Assessment",
  "Mortgage & Financing Assistance",
  "Commercial Property Leasing",
  "Real Estate Investment Advisory",
  "Legal Documentation Support",
  "Market Research & Analysis",
];

const OurServices = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h2>Our Services</h2>
          <p>
            We offer a comprehensive range of real estate services to meet all
            your property needs. From buying and selling to property management
            and investment advisory, we’re your one-stop solution for all things
            real estate.
          </p>

          <div className={styles.servicesList}>
            <div>
              {services.slice(0, 4).map((service, index) => (
                <p key={index}>
                  <FaCheckCircle className={styles.icon} /> {service}
                </p>
              ))}
            </div>
            <div>
              {services.slice(4).map((service, index) => (
                <p key={index}>
                  <FaCheckCircle className={styles.icon} /> {service}
                </p>
              ))}
            </div>
          </div>

          <button className={styles.btn}>View All Services</button>
        </div>

        <div className={styles.imageSection}>
          <img src={serviceImg} alt="Our Services" />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
