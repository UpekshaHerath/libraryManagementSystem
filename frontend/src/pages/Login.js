import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submit() {
    console.log(email);
    console.log(password);
    if (email === "abc@gmail.com" && password === "abc") {
        console.log("Ok");
        navigate("/home");
    } else {
        console.log("Not working");
    }
  }

  return (
    <Form
      onSubmit={submit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        fontSize: "20px",
        paddingTop: "100px",
        boarder: "2px solid black"
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" style={{width: "600px", fontSize: "17px"}} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" style={{width: "600px", fontSize: "17px"}} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
      </Form.Group>
      <Button variant="info" type="submit" style={{width: "600px", fontSize: "17px"}}>
        Login
      </Button>
    </Form>
  );
}
