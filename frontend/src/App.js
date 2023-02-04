import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Book from "./pages/Book";
import LayOut from "./pages/LayOut";
import BorrowedBook from "./pages/BorrowedBook";
import UpdateBook from "./components/UpdateBook";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="/books" element={<Book />} />
        <Route path="/books/update/:id" element={<UpdateBook />} />
        <Route path="/borrowed" element={<BorrowedBook />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
