import React from "react";
import { Form, Button } from "react-bootstrap";

class Contact extends React.Component {
  render() {
    return (
      <div className="container" id="contact" style={{ maxWidth: "100%" }}>
        <div className="row">
          <div className="col-12 col-md-12 d-flex justify-content-center align-items-center">
            <img
              src="https://image.freepik.com/free-vector/contact-us-woman-with-headphones-microphone-with-computer_113065-280.jpg"
              alt=""
            />
          </div>
        </div>

        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ color: "white", background: " orange" }}
        >
          <div className="col-6 col-md-6">
            <h1 className="text-center" style={{ color: "white" }}>
              Find us Today
            </h1>
            <div className="d-flex justify-content-center">
              <div className="pr-4">
                <a href="https://www.facebook.com/ ">
                  <i className="fab fa-3x fa-facebook "></i>
                </a>
              </div>
              <div className="pr-4">
                <a href="https://www.twitter.com/ ">
                  <i className="fab fa-3x fa-3x fa-twitter "></i>
                </a>
              </div>
              <div className="pr-4">
                <a href="https://www.instagram.com/ ">
                  <i className="fab fa-3x fa-instagram "></i>
                </a>
              </div>

              <div className="pr-4">
                <a href="https://www.linkedin.com/ ">
                  <i className="fab fa-3x fa-linkedin-in "></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-6">
            <Form
              style={{
                color: "white",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>username:</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                className="text-white btn-primary btn-block"
                variant="primary"
                type="button"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
