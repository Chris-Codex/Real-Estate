import React from "react";
import "./Body.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Home from "../Images/buyhome.jpg";
import Rental from "../Images/rental.jpg";
import Neigbours from "../Images/neigbours.jpg";

const Body = () => {
  return (
    <>
      <Container>
        <center>
          <h2 className="first_content">See how Trulia can help</h2>
          <Row>
            <Col xs={12} md={12}>
              Real Estate Agent based in Protaras, Larnaca, Limassol & Paphos
              offering an Independent Property Service. With our global
              marketing and experienced property consultants we offer a full
              service. Please do not hesitate to contact us for any advice or
              assistance.
            </Col>
          </Row>
        </center>
        <main>
          <Row className="bodyRow">
            <Col xm={12} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Home} />
                <Card.Body>
                  <Card.Title>
                    <center>Buy a home</center>
                  </Card.Title>
                  <Card.Text>
                    <center>
                      With over 1 million+ homes for sale available on the
                      website, Trulia can match you with a house you will want
                      to call home.
                    </center>
                  </Card.Text>
                  <center>
                    <Button variant="primary">Find a home</Button>
                  </center>
                </Card.Body>
              </Card>
            </Col>

            <Col xm={12} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={Rental}
                  style={{ height: "190px" }}
                />
                <Card.Body>
                  <Card.Title>
                    <center>Rent a home</center>
                  </Card.Title>
                  <Card.Text>
                    <center>
                      With 35+ filters and custom keyword search, Trulia can
                      help you easily find a home or apartment for rent that
                      you'll love.
                    </center>
                  </Card.Text>
                  <center>
                    <Button variant="primary">Find a rental</Button>
                  </center>
                </Card.Body>
              </Card>
            </Col>

            <Col xm={12} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={Neigbours}
                  style={{ height: "190px" }}
                />
                <Card.Body>
                  <Card.Title>
                    <center>See neighbours</center>
                  </Card.Title>
                  <Card.Text>
                    <center>
                      With more neighborhood insights than any other real estate
                      website, we've captured the color and diversity of
                      communities.
                    </center>
                  </Card.Text>
                  <center>
                    <Button variant="primary">Find a home</Button>
                  </center>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </main>
      </Container>
    </>
  );
};

export default Body;
