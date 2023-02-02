import React from "react";

const styles = {
  container: {
    backgroundColor: "#fafafa",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    padding: "20px",
    width: "800px",
    margin: "20px auto",
    textAlign: "center",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    margin: "0",
  },
  author: {
    margin: "0",
    color: "gray",
  },
  description: {
    fontSize: "14px",
    color: "gray",
  },
};

export default function BookCard({ number, title, author, description }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3>{number}</h3>
        <h3 style={styles.title}>{title}</h3>
        <h5 style={styles.author}>{author}</h5>
      </div>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

