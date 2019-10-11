import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Footer extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center">
        <Nav >
          <p className="small text-white">
            Some non-copyright jargin goes here.
          </p>
        </Nav>
      </Navbar>
    );
  }

}

export default Footer;
