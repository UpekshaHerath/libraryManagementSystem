import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { FaTrash, FaBook, FaPlus, FaEdit } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function Book() {
  const [data, setData] = useState(null);
  const [numberOfBooks, setNumberOfBooks] = useState("");

  async function makeGetRequest(url) {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const responseData = await makeGetRequest("http://localhost:3000/books/");
      const bookCount = await makeGetRequest(
        "http://localhost:3000/books/count"
      );
      setData(responseData);
      setNumberOfBooks(bookCount[0].bookCount);
    }

    fetchData();
  }, []);

  async function deleteTheRecord(Delete_id) {
    axios
      .delete(`http://localhost:3000/books/${Delete_id}/`)
      .then(function (response) {
        console.log(response.data);
        window.location.reload(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const cardStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: "20px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
      transition: "0.3s",
      cursor: "pointer",
      padding: "20px 60px 20px 60px",
      margin: "20px",
    },
    line: {
      padding: "10px"
    }
  };

  return (
    <>
      <div  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Container>
          <Row style={{ padding: "14px", margin: "20px 50px 0px 50px" }}>
            <Col>
              <Button variant="info">
                Number of all the available books :{" "}
                <Badge bg="info">{numberOfBooks}</Badge>
              </Button>
            </Col>
            <Col>
              <Nav.Link href="/books/new">
                <Button variant="info">
                  <span>
                    New Book <FaBook /> <FaPlus />
                  </span>
                </Button>
              </Nav.Link>
            </Col>
          </Row>
        </Container>

        {data === null ? (
          <p>Loading...</p>
        ) : (
          data.map((data) => {
            return (
              <Container style={cardStyles.container}>
                <div style={cardStyles.line}>
                  <h5>{data.title}</h5>
                  <Button
                    variant="danger"
                    onClick={() => deleteTheRecord(data._id)}
                  >
                    <FaTrash />
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => deleteTheRecord(data._id)}
                    style={{margin: "4px"}}
                  >
                    <FaEdit />
                  </Button>
                </div>

                <div style={cardStyles.line}>{data.author}</div>
                <div style={cardStyles.line}>{data.description}</div>
              </Container>
            );
          })
        )}
      </div>
    </>
  );
}
