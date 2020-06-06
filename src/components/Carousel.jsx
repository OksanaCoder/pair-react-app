import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


const CarouselMain = () => {
    return (
     
<div className="container mt-5">
<div className='row'>
    <div className='col-12'>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block img"
      src="https://images.unsplash.com/photo-1530519507795-42213b27dabf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
  
      <h4>A great place to be stranded.</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img"
      src="https://images.unsplash.com/photo-1532722926191-ebbfb3498b34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
  
       <h4>Where the bookstore comes to you.</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img"
      src="https://images.unsplash.com/photo-1468273519810-d3fe4c125cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
  
      <h4>Read, Lead, Succeed.</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>
</div>
    )
}

export default CarouselMain;