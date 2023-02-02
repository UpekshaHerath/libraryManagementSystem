import React, { useState } from "react";
import { Link } from "react-router-dom";
import ControlledCarousel from "../components/ControlledCarousel";

function Home() {
    return (
      <div style={{ padding: "0px 100px 0px 100px", maxHeight: "100%vh" }}>
        <ControlledCarousel />
      </div>
    );
  }
  

export default Home;

