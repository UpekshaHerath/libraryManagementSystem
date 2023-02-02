import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Stack } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LayOut() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="app">
      <Button variant="primary" onClick={handleShow}>
        Launch Side Bar
      </Button>
      <Outlet />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
