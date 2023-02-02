import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Stack } from "react-bootstrap";
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

      

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
