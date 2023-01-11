import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const fb = require("../assets/images/facebook_logo.png");
const google = require("../assets/images/google-partner.png");
const forbes = require("../assets/images/forbes.webp");
const inc = require("../assets/images/inc.png");
const millions = require("../assets/images/100y.png");
const years = require("../assets/images/fifteen.png");

export const Footer = () => {
  return (
    <Row className="footer justify-content-space-between align-items-start">
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
  );
};
