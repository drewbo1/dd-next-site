import React, { useState, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import Spinner from 'react-bootstrap/Spinner';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [captcha, setCaptcha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleIsLoadingToggle = () => {
    setIsLoading((isLoading) => !isLoading);
  };

  const onChange = () => {
    setCaptcha((captcha) => !captcha);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (captcha) {
      const { name, email, message } = formData;
      handleIsLoadingToggle();
      let templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Andy',
        message: message,
      };
      emailjs
        .send(
          'service_ut6qeda',
          'template_cnqe7de',
          templateParams,
          'user_k5sE5uKKb01pdUWenR2Kw'
        )
        .then(
          (result) => {
            console.log(result.text);
            if (result.text === 'OK') {
              alert('Your mail is sent!');
              handleIsLoadingToggle();
            }
          },
          (error) => {
            console.log(error.text);
            alert('There was a problem, your mail could not be sent.');
            handleIsLoadingToggle();
          }
        );
      clearForm();
    } else {
      alert('Please confirm your non-robot status');
    }
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
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
            <div className='g-recaptcha'>
              <ReCAPTCHA
                sitekey='6LdRBO8aAAAAAIhWvIeNGoCu-SF6-ThFFrHkDr9t'
                onChange={onChange}
              />
            </div>
            {isLoading ? (
              <Spinner animation='border' variant='dark' />
            ) : (
              <Button variant='dark' type='submit'>
                Submit
              </Button>
            )}
          </Form>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Contact;
