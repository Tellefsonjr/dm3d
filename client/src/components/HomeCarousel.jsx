import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

class HomeCarousel extends Component {

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block"
              src={ process.env.PUBLIC_URL + '/default.jpg' }
              alt="First slide"
              fluid
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block"
              src={ process.env.PUBLIC_URL + '/default.jpg' }
              alt="Second slide"
              fluid
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block"
              src={ process.env.PUBLIC_URL + '/default.jpg' }
              alt="Third slide"
              fluid
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }

}

export default HomeCarousel;
