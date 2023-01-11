import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import {GoTriangleDown } from "react-icons/go";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const logo = require('../assets/images/tier_logo.png')

export const Header = () => {
  return (
    <header>
      <Container>
        <Row className='align-items-center'>
          <Col md={2}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <nav>
              <ul>
                <li>
                  <a href="">WHAT WE DO <GoTriangleDown/></a>
                  <a href="">BLOG</a>
                  <a href="">PODCAST</a>
                  <a href="">CAREERS</a>
                </li>
              </ul>
            </nav>
          </Col>
          <Col md={3}>
            <button>WORK WITH US</button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
