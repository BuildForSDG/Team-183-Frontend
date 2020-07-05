import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    return (
      <div className="container" id="contact" style={{ maxWidth: '100%', marginTop: '-40px' }}>
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
          style={{ color: 'white', background: ' orange' }}
        >
          <div className="col-6 col-md-6">
            <h1 className="text-center" style={{ color: 'white' }}>
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
                color: 'white',
                fontSize: '1.5rem',
                marginBottom: '1rem'
              }}
            >
              <Form.Group>
                <Form.Text className="text-muted">We'll never share your contacts with anyone else.</Form.Text>
                {/* <Form.Label>Full Name:</Form.Label> */}
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email address:</Form.Label> */}
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group>
                {/* <Form.Label>username:</Form.Label> */}
                <Form.Control
                  type="text"
                  //  style={{backgroundColor: "transparent"}}
                  as="textarea"
                  rows="3"
                  placeholder="Message"
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox" className="form-group-contact">
                <Form.Check type="checkbox" label="Opt-in to our mailing list" />
              </Form.Group>
              <Button
                className="text-white btn-primary btn-block"
                style={{ borderRadius: '20px' }}
                variant="primary"
                type="button"
              >
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
