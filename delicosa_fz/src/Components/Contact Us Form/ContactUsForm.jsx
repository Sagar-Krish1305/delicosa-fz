import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input change for each form field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation function for each form field
  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData); // Log form data
      // You can submit the form data to your backend or perform any other action here
    }
  };

  return (
    <Container style={{ maxWidth: '800px', backgroundColor: 'rgba(255, 255, 255, 0)'}}>
      <Row className="justify-content-center container">
        <Col lg={8} md={10} sm={12}>
          <Card style={{backgroundColor: 'rgba(255, 255, 255, 0.11)'}}>
            <Card.Body>
              <Form style={{padding: '20px 30px 0px 30px'}} onSubmit={handleSubmit}>
                <Form.Group className='my-3' controlId="formName">
                  <Form.Label style={{ color: '#fff' }}>Name</Form.Label>
                  <Form.Control
                    style={{ color: '#1F603C', borderColor: '#fff'}}
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                </Form.Group>
                <Form.Group style={{paddingTop: '10px'}} className='my-3' controlId="formEmail">
                  <Form.Label style={{ color: '#fff' }}>Email</Form.Label>
                  <Form.Control
                    style={{ color: '#1F603C', borderColor: '#fff' }}
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </Form.Group>
                <Form.Group style={{paddingTop: '10px'}} className='my-3' controlId="formPhone">
                  <Form.Label style={{ color: '#fff' }}>Phone No.</Form.Label>
                  <Form.Control
                    style={{ color: '#1F603C', borderColor: '#fff'}}
                    type="tel"
                    placeholder="Enter your phone no."
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                </Form.Group>
                <Form.Group style={{paddingTop: '10px'}} className='my-3' controlId="formMessage">
                  <Form.Label style={{ color: '#fff' }}>Message</Form.Label>
                  <Form.Control
                    style={{ color: '#1F603C', borderColor: '#fff'}}
                    as="textarea"
                    rows={6}
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
                </Form.Group>
                <Button
                  variant="warning"
                  type="submit"
                  className="w-100 my-3"
                  style={{ backgroundColor: '#DAA520', borderColor: '#DAA520', color: '#1F603C'}}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}