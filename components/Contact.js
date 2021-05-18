import React, { useState, Fragment } from 'react';
import { Axios } from '../src/firebase/firebaseConfig';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const sendEmail = () => {
    Axios.post(
      'https://us-central1-dog-destinations.cloudfunctions.net/submit',
      formData
    ).catch((error) => {
      console.log(error);
    });
  };
  return (
    <Fragment>
      <Container>
        <Card className='contact-card'>
          <h2 className='section-heading'>Contact us</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Name'
                onChange={updateInput}
                value={formData.name || ''}
              />
            </Form.Group>
            <Form.Group controlId='formEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Email'
                onChange={updateInput}
                value={formData.email || ''}
              />
            </Form.Group>
            <Form.Group controlId='formMessage'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                type='text'
                name='message'
                placeholder='Message'
                onChange={updateInput}
                value={formData.message || ''}
                rows={3}
              />
            </Form.Group>
            <Button variant='dark' type='submit'>
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Contact;
