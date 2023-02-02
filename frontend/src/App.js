import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Book from "./pages/Book";
import LayOut from "./pages/LayOut";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route exact path="/books" element={<Book />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
