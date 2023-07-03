import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { FaTrash, FaBook, FaPlus, FaEdit } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import {
  useNavigate,
} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function Book() {
  const [data, setData] = useState(null);
  const [numberOfBooks, setNumberOfBooks] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [newShow, setNewShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseNew = () => setNewShow(false);
  const handleShowNew = () => setNewShow(true);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [newField, setNewField] = useState(""); // this is the new field 

  // post a book to the backend 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/books/", {
        title,
        author,
        description,
      });
      setTitle("");
      setAuthor("");
      setDescription("");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeSubmit = async (event) => {};

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
  }); // changed this place

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
      padding: "10px",
    },
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container>
          <Row style={{ padding: "14px", margin: "20px 50px 0px 50px" }}>
            <Col>
              <Button variant="info">
                Number of all the available books :{" "}
                <Badge bg="info">{numberOfBooks}</Badge>
              </Button>
            </Col>
            <Col>
              <>
                <Button variant="info" onClick={handleShowNew}>
                  <span>
                    New Book <FaBook /> <FaPlus />
                  </span>
                </Button>

                <Modal show={newShow} onHide={handleCloseNew}>
                  <Modal.Header closeButton>
                    <Modal.Title>New Book</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Control
                        type="text"
                        value={title}
                        placeholder="Book title"
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                      <br />
                      <Form.Control
                        type="text"
                        value={author}
                        placeholder="Author name"
                        onChange={(e) => {
                          setAuthor(e.target.value);
                        }}
                      />
                      <br />
                      <Form.Control
                        as="textarea"
                        value={description}
                        placeholder="Description"
                        rows={3}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                      <br />
                      <Form.Control
                        as="textarea"
                        value={newField}
                        placeholder="New Value"
                        rows={3}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                      <br />
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseNew}>
                      Close
                    </Button>
                    <Button variant="info" type="submit" onClick={handleSubmit}>
                      Add
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
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
                  {/**
                   * Update button
                   */}
                  <Button
                    variant="warning"
                    onClick={handleShow}
                    style={{ margin: "4px 0px 4px 4px" }}
                  >
                    <FaEdit />
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Update Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={handleSubmit}>
                        <Form.Control
                          type="text"
                          value={data.title}
                          placeholder="Book title"
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                        />
                        <br />
                        <Form.Control
                          type="text"
                          value={data.author}
                          placeholder="Author name"
                          onChange={(e) => {
                            setAuthor(e.target.value);
                          }}
                        />
                        <br />
                        <Form.Control
                          as="textarea"
                          value={data.description}
                          placeholder="Description"
                          rows={3}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        />
                        <br />
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="info"
                        type="submit"
                        onClick={handleChangeSubmit}
                      >
                        Update
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Button
                    variant="success"
                    onClick={() => deleteTheRecord(data._id)}
                    style={{ margin: "4px 0px 4px 4px" }}
                  >
                    <Nav.Link href="/borrowed">
                      <FaEdit />
                    </Nav.Link>
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
