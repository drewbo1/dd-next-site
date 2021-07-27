import React, { useState, useEffect, Fragment } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import MobileStoreButton from 'react-mobile-store-button';
import Contact from '../components/Contact';
import fire from '../src/firebase/firebaseConfig';
import { snapshotToArray } from '../src/firebase/extras';
import { init } from 'emailjs-com';

const Home = () => {
  const [totalUsers, setTotalUsers] = useState('');
  const [locations, setLocations] = useState({});

  useEffect(() => {
    getTotalUsers();
  }, [totalUsers]);

  useEffect(() => {
    getLocations();
  }, []);

  useEffect(() => {
    init('user_k5sE5uKKb01pdUWenR2Kw');
  });

  const iOSUrl =
    'https://apps.apple.com/ie/app/dog-destinations/id1534439374#?platform=iphone';

  const androidUrl =
    'https://play.google.com/store/apps/details?id=com.andrewmarshall.dogdestinations';

  const getTotalUsers = () => {
    fire
      .database()
      .ref('/users/user_count')
      .once('value', (snapshot) => {
        const val = snapshot.val();
        setTotalUsers(val);
        console.log(val);
      });
  };

  const getLocations = () => {
    fire
      .database()
      .ref('/locations')
      .once('value', (snapshot) => {
        const val = snapshotToArray(snapshot);
        setLocations(val);
        console.log(val);
      });
  };

  const totalLocations = Object.keys(locations).length;

  const totalUsersScript = `We currently have ${totalUsers} users registered.`;

  const totalLocationsScript = `We have ${totalLocations} locations currently added by users.`;

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <div className={styles.mainA}>
            <Row>
              <Col>
                <div className={styles.mainContent}>
                  <div className={styles.mainLogo}>
                    <Image
                      src='v1622472450/logo2black_kn3nkw.png'
                      alt='logo'
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.title}>
                    <h1>Dog Destinations</h1>
                    <h2 className={styles.subtitle}>
                      Share, find, like and review great locations for you and
                      your dog
                    </h2>
                  </div>
                  <div className={styles.buttonBoxArea}>
                    <div className={styles.storeButtonApple}>
                      <MobileStoreButton
                        store='ios'
                        url={iOSUrl}
                        width={250}
                        height={100}
                        alt='Apple Store button'
                      />
                    </div>
                    <div className={styles.storeButton}>
                      <MobileStoreButton
                        store='android'
                        url={androidUrl}
                        width={250}
                        height={100}
                        alt='Android store button'
                      />
                    </div>
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
                        ability to search by location type as well as County.
                        Each type of location has a unique marker for ease of
                        identification.
                      </p>
                    </div>
                    <Col>
                      <Image
                        src='v1620160683/mapPage_vo2n1a.png'
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
                      related business we want you to share the locations that
                      you want others to see.
                    </p>

                    <Image
                      src='v1620160620/addPage_lehvm1.png'
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
                      Leave reviews of the locations that you know, to help
                      others chose great locations and businesses to visit.
                      Alternatively you can rate the locations out of 5 stars.
                    </p>

                    <Image
                      src='v1620160699/reviewPage_fb83up.png'
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
                    <p>{totalUsersScript}</p>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card className={styles.card}>
                    <h3>Locations</h3>
                    <p>{totalLocationsScript}</p>
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
    </Fragment>
  );
};

export default Home;
