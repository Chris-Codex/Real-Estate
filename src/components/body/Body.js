import React from "react";
import "./Body.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Home from "../Images/buyhome.jpg";
import Rental from "../Images/rental.jpg";

const Body = () => {
  return (
    <>
      <Container>
        <center>
          <h2 className="first_content">See how Trulia can help</h2>
        </center>
        <main>
          <Row className="bodyRow">
            <Col xm={6} md={4}>
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

            <Col xm={6} md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Rental} />
                <Card.Body>
                  <Card.Title>
                    <center>Buy a home</center>
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

            <Col xm={6} md={4}>
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
          </Row>
        </main>
      </Container>
    </>
  );
};

export default Body;
