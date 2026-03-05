import React, { useState } from "react";
import styles from "./UploadPosts.module.css";

const UploadPost = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
    image: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Property Uploaded Successfully! (Demo)");
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Upload New Property</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price (e.g. $150,000)"
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <button type="submit">Upload Post</button>
      </form>
    </div>
  );
};

export default UploadPost;
