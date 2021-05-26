import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Delete.module.css';
import DeleteForm from '../components/DeleteForm';

const Delete = () => {
  return (
    <Container className={styles.section}>
      <Col>
        <div className={styles.heading}>
          <h1>Information Delete</h1>
        </div>
        <div className={styles.subHeading}>
          <h3>
            What to do if you want all the information we hold about you deleted
          </h3>
        </div>
        <div className={styles.mainSection}>
          <p>
            If you would like your account to be deleted and all the information
            we hold about you to be deleted, then please use the form below to
            contact us. You must give the email address that you used to sign
            up, or the address that is associated with your Facebook, Google or
            Apple accounts if you used those. When we receive the message we
            will remove your account and delete all of the associated
            information.
          </p>
          <DeleteForm />
        </div>
      </Col>
    </Container>
  );
};

export default Delete;
