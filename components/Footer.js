import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  const router = useRouter();

  return (
    <div className='footer'>
      <Row>
        <Col lg={4} md={4} sm={12} className='social-icon-box'>
          <p></p>
        </Col>
        <Col lg={4} md={4} sm={12} className='copyright-block'>
          <p>Copyright 2021 Dog Destinations</p>
        </Col>

        <Col lg={4} md={4} sm={12} className='extra-nav'>
          <ul>
            <li>
              <Link href='/privacy'>
                <a
                  className={router.pathname == '/privacy' ? 'active' : ''}
                  style={{ textDecoration: 'none' }}
                >
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li>
              <Link href='/delete'>
                <a
                  className={router.pathname == '/delete' ? 'active' : ''}
                  style={{ textDecoration: 'none' }}
                >
                  Delete all information
                </a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
