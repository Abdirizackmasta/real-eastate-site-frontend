import React from "react";
import styles from "./OurStory.module.css";
import { CheckCircle } from "lucide-react";

const OurStory = () => {
  return (
    <section className={styles.ourStory}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h2>Our Story</h2>
          <p>
            Founded in 2008 by Sarah Wanjiku, Guriflex Real Estate began with a
            simple vision: to make quality real estate services accessible to
            every Kenyan family. What started as a small office in Nairobi has
            grown into one of Kenya's most trusted real estate agencies.
          </p>
          <p>
            Over the years, we've helped thousands of families find their dream
            homes, assisted businesses in securing prime commercial spaces, and
            guided investors toward profitable real estate opportunities. Our
            success is built on trust, expertise, and an unwavering commitment
            to our clients.
          </p>

          <ul className={styles.features}>
            <li>
              <CheckCircle className={styles.icon} />
              15+ years of proven track record
            </li>
            <li>
              <CheckCircle className={styles.icon} />
              500+ successful property transactions
            </li>
            <li>
              <CheckCircle className={styles.icon} />
              Award-winning customer service
            </li>
            <li>
              <CheckCircle className={styles.icon} />
              Expert local market knowledge
            </li>
          </ul>
        </div>

        <div className={styles.imageSection}>
          <img
            src="/Nairobi2.jpg"
            alt="Our team meeting"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
