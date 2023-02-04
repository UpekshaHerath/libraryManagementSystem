import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Book from "./pages/Book";
import LayOut from "./pages/LayOut";
import NewBook from "./components/NewBook";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="/books" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
