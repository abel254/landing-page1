import { ImArrowUp } from 'react-icons/im';
import { ImArrowDown } from 'react-icons/im';
import { GoTriangleDown } from 'react-icons/go';
import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const logo = require('../assets/images/tier_logo.png');

export const Header = () => {
  return (
    <header>
      {/* navbar */}
      <Navbar expand="md" variant="dark">
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
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          {/* collapse navbar-collapse */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* navbar-nav */}
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
              {/* nav-link */}
              <Nav.Link>BLOG</Nav.Link>
              <Nav.Link>PODCAST</Nav.Link>
              <Nav.Link>CAREERS</Nav.Link>
            </Nav>
            <button>WORK WITH US</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
