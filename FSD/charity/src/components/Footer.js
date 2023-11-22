//footer--pin
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  return (
    <footer className={`footer--pin navbar navbar-expand-lg navbar-light bg-light${!showFooter ? ' fixed-bottom' : ''}`}>
      <Container>
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase"></h5>
            <h5 className="text-uppercase">Charity Management System</h5>
            <p>
              Located In Pune , Kothrud
            </p>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Made With</h5>

            <ul className="list-unstyled">
              <li>
                <p className="text-dark">REACT.js</p>
              </li>
              <li>
                <p className="text-dark">JAVASCRIPT</p>
              </li>
              <li>
                <p className="text-dark">NODE.js</p>
              </li>
              <li>
                <p className="text-dark">Bootstrap</p>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center p-3 bg-dark text-white">
          &copy; {new Date().getFullYear()} Charity Management System. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;