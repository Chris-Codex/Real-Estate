import React from "react";
import "./bodycontact.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

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

              <Col xs={6} md={6}></Col>
            </Row>
          </Form>
        </Container>
      </div>

      <div className="section-contact">dsadadc</div>
    </>
  );
};

export default Bodycontact;
