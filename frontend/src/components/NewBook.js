import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function NewBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/books/', { title, author, description });
      setTitle("");
      setAuthor("");
      setDescription("");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "50px", margin: "100px 150px 0px 150px" }}>
      <h2 style={{ textAlign: "center" }}>Add New Book</h2>
      <br />
      <br />
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
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

