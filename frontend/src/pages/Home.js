import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
      <div className="home-content">
        <h1>Welcome to the Library Management System</h1>
        <p>Search, borrow, and manage your books here</p>
        <button>Start exploring</button>
      </div>
    );
  }
  

export default Home;

