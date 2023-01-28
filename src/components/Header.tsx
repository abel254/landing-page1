import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { GoTriangleDown } from "react-icons/go";
import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

const logo = require("../assets/images/tier_logo.png");

export const Header = () => {
  return (
    <header>
      <Navbar expand='md' variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo}
              alt="HeaderImg"
              width="55"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="toggler navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="WHAT WE DO" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>BLOG</Nav.Link>
              <Nav.Link>PODCAST</Nav.Link>
              <Nav.Link>CAREERS</Nav.Link>
            </Nav>
            <button>WORK WITH US</button>
          </Navbar.Collapse>
        </Container>
      </Navbar> 

{/* <Navbar expand="lg">
      <Container>
      <Navbar.Brand href="#">
            <img
              src={logo}
              alt="HeaderImg"
              width="55"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </header>
  );
};
