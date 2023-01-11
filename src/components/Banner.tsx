import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Footer } from "./Footer";

const banner = require("../assets/images/image.png");

export const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row className="align-items-center">
          <Col md={6} lg={7}>
            <div className="banner-text">
              <h1>
                Unlock Your Business Potential With Facebook & Instagram
                Advertising
              </h1>
              <p>Facebook Premier Level Partner Agency</p>
              <button>WORK WITH US</button>
            </div>
          </Col>
          <Col md={6} lg={5} className="image">
            <img src={banner} alt="" />
          </Col>
        </Row>
        <Footer />
      </Container>
    </section>
  );
};
