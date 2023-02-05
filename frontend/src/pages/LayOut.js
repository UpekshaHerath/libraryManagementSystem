import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Stack } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import {FaBook} from "react-icons/fa";
import {ImBooks} from "react-icons/im";
import {RiLogoutBoxFill} from "react-icons/ri";

export default function LayOut() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div onClick={handleShow} style={headerBarStyling}>
        <FaBars style={{fontSize: "40px"}} />
        <h2>Library Management System</h2>
      </div>

      <Outlet />

      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor: "#31d2f2"}}>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title style={{ fontSize: "40px"}}>LMS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{color: "black"}}>
          <Nav defaultActiveKey="/home" className="flex-column" style={{padding: "20px"}}>
            <Nav.Link href="/home"  style={{color: "black", padding: "20px"}}><AiFillHome />{"   "}Home</Nav.Link>
            <Nav.Link href="/books"  style={{color: "black", padding: "20px"}}><FaBook />{"   "}Books</Nav.Link>
            <Nav.Link href="/borrowed"  style={{color: "black", padding: "20px"}}><ImBooks />{"   "}Borrowed Books</Nav.Link>
            <Nav.Link href="/"  style={{color: "black", padding: "20px"}}><RiLogoutBoxFill />{"   "}Logout</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

const headerBarStyling = {
  padding: "20px",
  fontSize: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#31d2f2",
};
