import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const banner = require("../assets/images/image.png");
const fb = require("../assets/images/facebook_logo.png");
const google = require("../assets/images/google-partner.png");
const forbes = require("../assets/images/forbes.webp");
const inc = require("../assets/images/inc.png");
const millions = require("../assets/images/million.webp");
const years = require("../assets/images/years.jpg");

export const Banner = () => {
  return (
    <section className="banner w-100 pt-2">
      <Container className="w-100">
        <Row className="align-items-center mb-2 w-100" xs={1} md={2}>
          <Col md={6} lg={7}>
            <div className="banner-text w-100">
              <h1 className="fs-1">
                Unlock Your Business Potential With Facebook & Instagram
                Advertising
              </h1>
              <p>Facebook Premier Level Partner Agency</p>
              <button className="">WORK WITH US</button>
            </div>
          </Col>
          <Col md={6} lg={5} className="image">
            <img src={banner} alt="bannerImg" />
          </Col>
        </Row>

        <div>
          <Row xs={2} md={3} lg={6} className="m-auto ">
            <Col>
              <div className="logo">
                <img src={fb} alt="" />
                <p>
                  Facebook Premier <br />
                  Level Agencyt Partner
                </p>
              </div>
            </Col>
            <Col>
              <div className="logo">
                <img src={google} alt="" />
                <p>
                  Google Endosed <br />
                  Marketing Partner
                </p>
              </div>
            </Col>
            <Col>
              <div className="logo">
                <img src={forbes} alt="" />
                <p>
                  Forbes Agency <br />
                  Council Member
                </p>
              </div>
            </Col>
            <Col>
              <div className="logo">
                <img src={inc} alt="" />
                <p>
                  Inc. 5000 <br />
                  Fastest Growing Company
                </p>
              </div>
            </Col>
            <Col>
              <div className="logo">
                <img src={millions} alt="" />
                <p>
                  In Annual <br />
                  Digital Add Spend
                </p>
              </div>
            </Col>
            <Col>
              <div className="logo">
                <img src={years} alt="" />
                <p>
                  Years of Facebook <br />
                  Advertising Experience
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
