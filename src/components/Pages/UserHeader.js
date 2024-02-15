import React from "react";
// import { Navbar, Container } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
import { FormControl, Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
const UserHeader = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <a href="/"> shopping cart</a>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl style={{ width: 500 }} Placeholder="search a product" />
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};
export default UserHeader;
