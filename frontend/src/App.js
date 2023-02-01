import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
