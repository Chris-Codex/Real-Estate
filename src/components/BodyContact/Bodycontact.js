import React from "react";
import "./bodycontact.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import logoAfrica from "../Images/mapAfrica.png";

const Bodycontact = () => {
  return (
    <>
      <div className="section">
        <Container>
          <Form>
            <Row>
              <Col xs={12} md={6}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Control
                      className="form_control_one"
                      type="text"
                      placeholder="Normal text"
                    />
                    <Form.Control
                      className="form_control_one"
                      type="text"
                      placeholder="Normal text"
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Control
                      className="form_control_one"
                      type="text"
                      placeholder="Normal text"
                    />
                    <Form.Control
                      className="form_control_one"
                      type="text"
                      placeholder="Normal text"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={12}>
                    <Form.Label className="label_one">
                      Find out how much you can save on currency exchange via
                      our partners?
                    </Form.Label>
                    <Form.Control type="text" placeholder="Normal text" />
                  </Col>
                  <Col xs={12} md={12}>
                    <Form.Label className="label">Additional Note:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Col>
                  <Form.Label className="label">
                    {" "}
                    <Form.Label className="label_privacy">
                      Please read our{" "}
                      <span className="privacy">privacy notice</span> for
                      information on how we use your details.
                    </Form.Label>
                  </Form.Label>
                  <Button className="button_submit" variant="secondary">
                    Submit
                  </Button>
                </Row>
              </Col>

              <Col xs={12} md={6}>
                <div className="logoAfrica">
                  <center>
                    <img src={logoAfrica} alt="logo" />
                  </center>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <div className="section-contact">
        <Container>
          <Row>
            <center>
              <div className="contact-content">
                <h2>DON'T BE SHY</h2>
                <p>
                  Feel free to get in touch withus. We are always open to for
                  discussion at all times. W are here to serve you better.
                </p>
              </div>
            </center>
          </Row>

          <Row>
            <Col xs={12} md={3}></Col>
            <Col xs={12} md={3}>
              <div className="fa-mail">
                <p>
                  <FaMedium /> &nbsp;&nbsp; Call us: 0899786536
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="fa-mail">
                <p>
                  <FaMedium /> &nbsp;&nbsp; Mail us: info@christian.com
                </p>
              </div>
            </Col>
            <Col xs={12} md={3}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Bodycontact;
