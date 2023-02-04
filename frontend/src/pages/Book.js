import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function Book() {
  const [data, setData] = useState(null);
  const [numberOfBooks, setNumberOfBooks] = useState('');

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
      const bookCount = await makeGetRequest("http://localhost:3000/books/count");
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

  return (
    <>
      <div style={{display: "flex", flexDirection: "column"}}>
        <Button variant="primary" style={{padding: '14px', margin: '20px 50px 0px 50px'}}>
          Number of all the available books : <Badge bg="secondary">{numberOfBooks}</Badge>
        </Button>

        {data === null ? (
          <p>Loading...</p>
        ) : (
          data.map((data) => {
            return (
              <Container
                style={{
                  padding: "10px 70px 0px 70px",
                  margin: "20px",
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid black"
                }}
              >
                <Row>
                  <Col>{data.title}</Col>
                  <Col>
                    <Button
                      variant="danger"
                      onClick={() => deleteTheRecord(data._id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
                <Row>{data.description}</Row>
              </Container>
            );
          })
        )}
      </div>
    </>
  );
}
