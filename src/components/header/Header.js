import React from "react";
import "./header.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../Images/logo1.png";

const Header = () => {
  return (
    <>
      <Container className="headerRow">
        <Row>
          <Col xm={6} md={4}>
            <Col xm={6} md={12} className="contentHeader">
              <FaPhoneAlt />
              <span className="leftLogoContent">CALL US FREE ON</span>
              <br />
              <span className="leftLogoContents">08997645387</span>
            </Col>
          </Col>

          <Col xm={6} md={4} className="centerHeader">
            <Col xm={12} md={12}>
              <img
                className="logoHeader"
                src={logo}
                alt="logo"
                width={200}
                height={100}
              />
            </Col>
          </Col>

          <Col xm={6} md={4} className="rightHeader">
            <Button className="buttonHeader" variant="warning">
              GET MORE INFORMATION
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
