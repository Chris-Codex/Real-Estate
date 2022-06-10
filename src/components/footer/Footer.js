import React from "react";
import "../footer/footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer-div">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="footer-row">
                <h5>About</h5>
                <p>
                  Ultimate Ventires Properties is committed to delivering a high
                  level of expertise, customer service, and attention to detail
                  to the marketing and sales of real estate and rentals in
                  Africa.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <div className="footer-rows">
                  <center>
                    <li>©2022 Ultimate Ventures. All rights reserved.</li>
                    <li>Powered by Expert Agent Estate Agent Software.</li>
                    <li>
                      Properties for Sale by Region | Properties to Let by
                      Region
                    </li>
                  </center>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
