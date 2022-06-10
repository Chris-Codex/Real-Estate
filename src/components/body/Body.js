import React, { useState } from "react";
import "./Body.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import Data from "../data/data";

const Body = () => {
  const [data, setData] = useState(Data);
  console.log(data);

  return (
    <>
      <Container>
        <center>
          <h2 className="first_content">See how Ultimate Ventures can help</h2>
          <Row>
            <Col xs={12} md={12}>
              Real Estate Agent based in Dublin, Cork, Galway & Limerick
              offering an Independent Property Service. With our global
              marketing and experienced property consultants we offer a full
              service. Please do not hesitate to contact us for any advice or
              assistance.
            </Col>
          </Row>
        </center>
        <main>
          <Row className="bodyRow">
            {data.map((info) => {
              return (
                <Col xm={12} md={4} key={info.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={info.image} />
                    <Card.Body>
                      <Card.Title>
                        <center>{info.title}</center>
                      </Card.Title>
                      <Card.Text>
                        <center>{info.content}</center>
                      </Card.Text>
                      <center>
                        <Button variant="primary">Find a home</Button>
                      </center>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </main>
      </Container>
    </>
  );
};

export default Body;
