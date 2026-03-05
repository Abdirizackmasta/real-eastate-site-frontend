import React from 'react'
import styles from "./Update.module.css"
import { FaArrowRight } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
function Update() {
  return (
    <div className={styles.updateContainer}>
      <button className={styles.updateButton}> <IoMdMailUnread /> Stay Updated</button>
      <h1 className={styles.updateTitle}>Get the Latest Property Updates</h1>
      <p>Subscribe to our newsletter for the latest property listings and market trends.</p>
      <div>
        <input type="email" placeholder="Enter your email" />
        <button className={styles.subscribeButton}>Subscribe &rarr;</button>
      </div>
    </div>
  )
}

export default Update
