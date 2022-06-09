import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h5>About</h5>
            <p>
              Ultimate Ventires Properties is committed to delivering a high
              level of expertise, customer service, and attention to detail to
              the marketing and sales of real estate and rentals in Africa.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <>
              <li>©2022 Cyprus Emerald. All rights reserved.</li>
              <li>
                Properties for Sale by Region | Properties to Let by Region |
                Privacy & Cookie Policy
              </li>
              <li>
                Powered by Expert Agent Estate Agent Software | Estate agent
                websites from Expert Agent
              </li>
            </>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
