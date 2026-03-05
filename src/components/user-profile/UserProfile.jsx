import React from "react";
import styles from "./UserProfile.module.css";

export default function UserProfilePage() {
  const handleEditProfile = () => {
    alert("Edit Profile functionality coming soon!");
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.profileCard}>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Avatar"
          className={styles.avatar}
        />
        <h2 className={styles.userName}>Abdirizack Issack</h2>
        <p className={styles.userDetail}>📧 abdirizack@example.com</p>
        <p className={styles.userDetail}>📞 +254 712 345 678</p>
        <p className={styles.userDetail}>📍 Nairobi, Kenya</p>
        <p className={styles.userJoined}>Joined: January 2023</p>

        <button className={styles.editButton} onClick={handleEditProfile}>
          Edit Profile
        </button>

        <div className={styles.section}>
          <h3>Recent Activity</h3>
          <ul className={styles.activityList}>
            <li>Updated profile information</li>
            <li>Changed password</li>
            <li>Viewed property in Westlands</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
