import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
      <Container fluid>
        <h1> Dashboard </h1>
        <Row>
          <Col md={2}>
            <h2> Campaigns </h2>
            <ul>
              <li><p> Campaign 1 </p></li>
              <li><p> Campaign 2 </p></li>
              <li><p> Campaign 3 </p></li>
            </ul>
          </Col>
          <Col md={2}>
            {/* TO DO: Click Campaign, load Encounters */}
          </Col>
          <Col md={6}>
            {/* TO DO: Click Campaign, load encounters */}
          </Col>
          <Col md={2}>
            {/* TO DO: Click Campaign, load players */}
          </Col>
        </Row>
    </Container>
    );
  }

}

export default Dashboard;
