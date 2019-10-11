import React, { Component } from 'react';
import logo from '../logo.svg';
import { Route, RouteHandler, Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
      <div id="navContainer">
        <Navbar bg="dark" variant="dark" expand="lg" className="Navbar text-center" fixed="top">
          <LinkContainer to="/">
            <Navbar.Brand>DM3D</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-align-center">
              <LinkContainer to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/encounter-builder">
                <Nav.Link>Encounter Builder</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/browse">
                <Nav.Link>Browse</Nav.Link>
              </LinkContainer>              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav className="mr-auto">
            {/* <Form inline>
              <FormControl type="text" size="sm" placeholder="Search" className="mr-sm-2"/>
              <LinkContainer to="/search">
                <Button variant="outline-success">Search</Button>
              </LinkContainer>
            </Form> */}
            </Nav>
            <Button variant="outline-success" className="ml-sm-2">Sign In</Button>
            <Button variant="outline-success" className="ml-sm-2 mr-sm-4">Register</Button>

          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }

}

export default Header;
