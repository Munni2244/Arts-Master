import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../images/pic1.jpg'
import pic2 from '../../../images/pic2.jpg'
import pic3 from '../../../images/women.jpg'
import pic4 from '../../../images/pic4.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img style={{height:'400px'}}
      className="d-block w-100 "
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>The Wonder Women</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
    style={{height:'400px'}}
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'400px'}}
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'400px'}}
      className="d-block w-100"
      src={pic4}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;