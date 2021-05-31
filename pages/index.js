import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import MobileStoreButton from 'react-mobile-store-button';
import Contact from '../components/Contact';

const Home = () => {
  const iOSUrl =
    'https://apps.apple.com/ie/app/dog-destinations/id1534439374#?platform=iphone';

  const androidUrl =
    'https://play.google.com/store/apps/details?id=com.andrewmarshall.dogdestinations';
  return (
    <Container fluid>
      <Row>
        <div className={styles.mainA}>
          <Row>
            <Col>
              <div className={styles.mainContent}>
                <div className={styles.mainLogo}>
                  <Image
                    src='https://res.cloudinary.com/dujftalas/image/upload/v1622472450/logo2black_ckhwkq.png'
                    alt='logo'
                    width={200}
                    height={200}
                  />
                </div>
                <div className={styles.title}>
                  <h1>Dog Destinations</h1>
                  <h4 className={styles.subtitle}>
                    Share, find, like and review great locations for you and
                    your dog
                  </h4>
                </div>
                <div className={styles.buttonBoxArea}>
                  <MobileStoreButton
                    store='ios'
                    url={iOSUrl}
                    width={130}
                    height={50}
                  />
                  <MobileStoreButton
                    store='android'
                    url={androidUrl}
                    width={130}
                    height={50}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
      <Row>
        <div className={styles.mainB}>
          <Container className='secondary'>
            <h2 className='section-heading'>Screens</h2>
            <Row className={styles.contentRow}>
              <Col lg={4}>
                <div className={styles.secondContent}>
                  <div className={styles.secondContentText}>
                    <h3>Map</h3>
                    <p>
                      Find locations near you on the interactive map, with the
                      ability to search by location type as well as County. Each
                      type of location has a unique marker for ease of
                      identification.
                    </p>
                  </div>
                  <Col>
                    <Image
                      src='https://res.cloudinary.com/dujftalas/image/upload/v1620160683/mapPage_vo2n1a.png'
                      alt='app screen'
                      width={250}
                      height={500}
                    />
                  </Col>
                </div>
              </Col>
              <Col lg={4}>
                <div className={styles.secondContent}>
                  <h3>Add</h3>
                  <p>
                    You can add as many locations as you like to Dog
                    Destinations. Whether you are an individual or have a dog
                    related business we want you to share the locations that you
                    want others to see.
                  </p>

                  <Image
                    src='https://res.cloudinary.com/dujftalas/image/upload/v1620160620/addPage_lehvm1.png'
                    alt='app screen'
                    width={250}
                    height={500}
                  />
                </div>
              </Col>
              <Col lg={4}>
                <div className={styles.secondContent}>
                  <h3>Review</h3>
                  <p>
                    Leave reviews of the locations that you know, to help others
                    chose great locations and businesses to visit. Alternatively
                    you can rate the locations out of 5 stars.
                  </p>

                  <Image
                    src='https://res.cloudinary.com/dujftalas/image/upload/v1620160699/reviewPage_fb83up.png'
                    alt='app screen'
                    width={250}
                    height={500}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Row>
      <Row>
        <div className={styles.mainC}>
          <Container className='secondary'>
            <h2 className='section-heading'>App Information</h2>
            <Row className={styles.contentRow}>
              <Col lg={4}>
                <Card className={styles.card}>
                  <h3>Page Views</h3>
                  <p>We have 5k+ page views since the launch of the app.</p>
                </Card>
              </Col>
              <Col lg={4}>
                <Card className={styles.card}>
                  <h3>Users</h3>
                  <p>We have 100+ users registered to use the app.</p>
                </Card>
              </Col>
              <Col lg={4}>
                <Card className={styles.card}>
                  <h3>Locations</h3>
                  <p>We have 20 locations currently added by users.</p>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Row>
      <Row>
        <div className={styles.mainB}>
          <Contact />
        </div>
      </Row>
    </Container>
  );
};

export default Home;
