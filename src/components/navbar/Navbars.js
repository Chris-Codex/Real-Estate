import React from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";

const Navbars = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DBH</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">HOME</Nav.Link>
              <Nav.Link href="#features">ABOUT US</Nav.Link>
              <Nav.Link href="#pricing">LATEST PROPERTIES</Nav.Link>
              <Nav.Link href="#pricing">FOR SALE</Nav.Link>
              <Nav.Link href="#pricing">TO LET</Nav.Link>
              <Nav.Link href="#pricing">CONTACT US</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Quotation</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
