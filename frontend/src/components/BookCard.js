import React from "react";

export default function BookCard({ number, title, author, description }) {
  function onClick() {
    console.log("hi");
  }
  return (
    <div style={style.finalContainer}>
      <div style={style.container} onClick={onClick}>
        <div style={style.header}>
          <p style={style.title}>{title}</p>
          <p style={style.author}>{author}</p>
        </div>
      </div>
    </div>
  );
}

const style = {
  finalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    perspective: "1000px",
  },
  container: {
    display: "inline-block",
    width: "70%",
    margin: "1%",
    padding: "1%",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    transformStyle: "preserve-3d",
    "&:hover": {
      transform: "rotateY(15deg) scale(1.05)",
      boxShadow: "0px 0px 10px #ccc",
      cursor: "pointer",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1%",
  },
  title: {
    margin: "0",
  },
  author: {
    margin: "0",
    color: "gray",
  },
  description: {
    margin: "0",
    fontSize: "14px",
    textAlign: "justify",
  },
};
